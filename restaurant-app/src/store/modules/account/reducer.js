import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  restaurant: null,
};

export default function account(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.professionalAccount;
        break;
      }
      case '@account/SELECT_RESTAURANT': {
        draft.restaurant = action.payload.restaurantId;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.restaurant = null;
        break;
      }
      default:
    }
  });
}
