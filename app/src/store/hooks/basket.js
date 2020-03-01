import React from 'react';
import { useSelector } from 'react-redux';

const useChairNumber = () => {
  const chairSelector = useSelector(state => state.basket.chair);

  if (!chairSelector) {
    return false;
  }
  return chairSelector.chair;
};

export { useChairNumber };
