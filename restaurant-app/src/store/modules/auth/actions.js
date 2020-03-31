export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, professionalAccount) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, professionalAccount },
  };
}

export function signUpRequest(fullName, email, password, cnpj) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { fullName, email, password, cnpj },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
