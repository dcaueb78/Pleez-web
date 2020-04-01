export function selectRestaurant(restaurantId) {
  return {
    type: '@account/SELECT_RESTAURANT',
    payload: { restaurantId },
  };
}
