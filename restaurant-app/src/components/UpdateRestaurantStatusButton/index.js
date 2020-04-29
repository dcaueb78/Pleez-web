import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MdPlayArrow, MdPause } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { getStatusText } from '~/utils/restaurantStatus';
import { ButtonHeader } from './styles';

export default function UpdateRestaurantStatusButton() {
  const [status, setStatus] = useState(0);
  const restaurantSelected = useSelector((state) => state.account.restaurant);

  useEffect(() => {
    async function loadApiStatus() {
      const response = await api.get(
        `/restaurant-status/${restaurantSelected}`
      );

      const apiStatus = response.data;
      setStatus(apiStatus);
    }

    loadApiStatus();
  }, [restaurantSelected]);

  const handleChangeButton = async () => {
    try {
      const updatedStatus = await api.patch('/restaurant-status/', {
        id: restaurantSelected,
      });
      setStatus(updatedStatus.data);
    } catch (err) {
      toast.error('Houve um problema, atualize a página para resolver!');
    }
  };

  return (
    <ButtonHeader status={status} onClick={handleChangeButton}>
      <div>
        <button type="button">
          {status === 0 ? (
            <MdPlayArrow size={44} color="#fff" />
          ) : (
            <MdPause size={44} color="#fff" />
          )}
        </button>
        <strong>{getStatusText(status)}</strong>
      </div>
    </ButtonHeader>
  );
}
