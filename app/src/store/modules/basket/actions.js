export function addToBasket(dish) {
  return {
    type: '@basket/ADD_TO_BASKET',
    payload: { dish }
  };
}
export function addChair(chair) {
  return {
    type: '@basket/ADD_CHAIR',
    payload: { chair }
  };
}
