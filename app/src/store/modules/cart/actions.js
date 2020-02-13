export function addToCart(dish) {
  return {
    type: '@cart/ADD_TO_CART',
    payload: { dish }
  };
}
