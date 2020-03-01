import produce from 'immer';

const INITIAL_STATE = {
  basket: [],
  quantity: 0,
  chair: null,
};

export default function basket(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@basket/ADD_TO_BASKET':
      return produce(state, draft => {
        draft.basket = [...draft.basket, action.payload.dish];
        draft.quantity++;
      });
    case '@basket/ADD_CHAIR':
      return produce(state, draft => {
        draft.chair = action.payload.chair;
      })
    default:
      return state;
  }
}
