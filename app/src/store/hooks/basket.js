import { useSelector } from 'react-redux';

const useChairNumber = () => {
  const chairSelector = useSelector(state => state.basket.chair);

  if (!chairSelector) {
    return false;
  }
  return chairSelector.chair;
};

const useRestaurantId = () => {
  const restaurantIdSelector = useSelector(state => state.basket.restaurant);

  if (!restaurantIdSelector) {
    return false;
  }
  return restaurantIdSelector.restaurant;
};

export { useChairNumber, useRestaurantId };
