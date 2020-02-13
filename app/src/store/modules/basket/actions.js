export function addToBasket(dish) {
  return {
    type: '@basket/ADD_TO_BASKET',
    payload: { dish }
  };
}
