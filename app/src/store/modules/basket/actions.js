export function addToBasket(dish) {
  return {
    type: '@basket/ADD_TO_BASKET',
    payload: { dish }
  };
}


export function clearBasket() {
  return {
    type: '@basket/CLEAR_BASKET'
  }
}

export function addChair(chair) {
  return {
    type: '@basket/ADD_CHAIR',
    payload: { chair }
  };
}


export function addRestaurant(restaurant) {
  return {
    type: '@basket/ADD_RESTAURANT',
    payload: { restaurant }
  };
}
