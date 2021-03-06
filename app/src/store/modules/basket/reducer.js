import produce from 'immer';

const INITIAL_STATE = {
  basket: [],
  quantity: 0,
  chair: null,
  restaurant: null
};

export default function basket(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@basket/ADD_TO_BASKET':
      return produce(state, draft => {
        draft.basket = [...draft.basket, action.payload.dish];
        draft.quantity++;
      });
    case '@basket/UPDATE_BASKET':
      return produce(state, draft => {
        draft.basket = [];
        draft.quantity = action.payload.basket.length;
      });
    case '@basket/CLEAR_BASKET':
      return produce(state, draft => {
        draft.basket = INITIAL_STATE.basket;
        draft.quantity = INITIAL_STATE.quantity;
      });
    case '@basket/ADD_CHAIR':
      return produce(state, draft => {
        draft.chair = action.payload.chair;
      });
    case '@basket/ADD_RESTAURANT':
      return produce(state, draft => {
        draft.restaurant = action.payload.restaurant;
      });
    case '@auth/SIGN_OUT': {
      return (
        state,
        draft => {
          draft.basket = [];
          draft.chair = null;
          draft.restaurant = null;
          draft.quantity = 0;
        }
      );
    }
    default:
      return state;
  }
}
