import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MdArrowBack, MdReorder } from 'react-icons/md';

import { addToBasket } from '~/store/modules/basket/actions';
import api from '~/config/api';
import history from '~/services/history';
import { formatPrice } from '~/utils/format';

import { dishDetails as dishDetailsEndPoint } from '~/services/api/endPoints';

import { orderHistoryRoute } from '~/services/api/pages';

import { Wrapper, Content, Scroll } from './styles';
import FoodImage from '~/components/FoodImage';
import AddToCartFooter from '~/components/AddToCartFooter';

import logo from '~/assets/logo.png';

export default function Details({ match }) {
  const { restaurant, dish } = match.params;

  const dispatch = useDispatch();

  const [dishDetails, setDishDetails] = useState([]);
  const [dishQuantity, setDishQuantity] = useState(1);
  const [dishComment, setDishComment] = useState('');
  const [dishId, setDishId] = useState();

  useEffect(() => {
    async function findDishDetails(dish_id) {
      const response = await api.get(dishDetailsEndPoint(dish_id));
      setDishDetails(response.data);
      setDishId(response.data.id);
    }

    findDishDetails(dish);
  }, [dish]);

  const subTotal = formatPrice(dishDetails.price * dishQuantity);

  function handleCommentChange(event) {
    setDishComment(event.target.value);
  }

  function handleDishQuantitySub() {
    if (dishQuantity > 1) {
      setDishQuantity(dishQuantity - 1);
    }
  }

  function handleDishQuantitySum() {
    setDishQuantity(dishQuantity + 1);
  }

  function handleAddToBasket() {
    dispatch(addToBasket({ dishId, dishQuantity, dishComment }));
  }

  return (
    <Wrapper>
      <Content>
        <button type="button" onClick={history.goBack}>
          <MdArrowBack size={32} color="white" />
        </button>
        <img src={logo} alt="Pleez" />
        <button type="button" onClick={() => history.push(orderHistoryRoute)}>
          <MdReorder size={32} color="white" />
        </button>
        <Scroll>
          <h1>{dishDetails.name}</h1>
          <FoodImage />
          <h3>Descrição:</h3>
          <p>{dishDetails.details}</p>
          <h3>Alguma observação?</h3>
          <textarea
            placeholder="Ex: Sem cebola..."
            value={dishComment}
            onChange={handleCommentChange}
          />
          <h3>Quantos vai querer?</h3>
          <div className="quantity">
            <button type="button" onClick={handleDishQuantitySub}>
              -
            </button>
            <input type="number" placeholder={dishQuantity} disabled />
            <button type="button" onClick={handleDishQuantitySum}>
              +
            </button>
          </div>
        </Scroll>
      </Content>
      <AddToCartFooter subTotal={subTotal} addToBasket={handleAddToBasket} />
    </Wrapper>
  );
}
