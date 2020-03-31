import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  restaurant: null,
};

export default function account(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.professionalAccount;
      });
    default:
      return state;
  }
}
