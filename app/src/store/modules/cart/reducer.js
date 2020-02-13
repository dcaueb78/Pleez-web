import produce from 'immer';

const INITIAL_STATE = {
  cart: [],
  quantity: 0
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return produce(state, draft => {
        draft.cart = [...draft.cart, action.payload.dish];
        draft.quantity++;
      });
    default:
      return state;
  }
}
