import React from 'react';
import { useSelector } from 'react-redux';

const useChairNumber = () => {
  const chair = useSelector(state => state.basket.chair);

  if (!chair) {
    return false;
  }
  return chair;
};

export { useChairNumber };
