import produce from 'immer';

const INITIAL_STATE = {
  basket: [],
  quantity: 0
};

export default function basket(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@basket/ADD_TO_BASKET':
      return produce(state, draft => {
        draft.basket = [...draft.basket, action.payload.dish];
        draft.quantity++;
      });
    default:
      return state;
  }
}
