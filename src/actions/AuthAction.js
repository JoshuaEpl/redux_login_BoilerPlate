import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILED,
  LOGIN_USER_START,
} from './AuthTypes';

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESSFUL,
    payload: user,
  });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAILED });
};

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({ email, password }) => {};
