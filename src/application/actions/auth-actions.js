import apiCall from 'src/application/libs/api-call';
import * as actionTypes from 'src/application/constants/auth-constants';

export function setLoggedInState (user) {
  return {
    type: actionTypes.AUTH_LOGGED_IN
  , user: user
  };
}

export function signup ({ data, router }) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.AUTH_SIGNUP_REQUESTED
    });

    return apiCall({
      method: 'POST'
    , path: '/signups'
    , data: data
    })
    .then(() => {
      router.transitionTo('/');
    })
    .catch((res) => {
      dispatch({
        type: actionTypes.AUTH_SIGNUP_FAILED
      , errors: {
          code: res.status
        , data: res.data
        }
      });
    });
  };
}

export function login ({ data, authAgent, router }) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.AUTH_LOGIN_REQUESTED
    });

    return apiCall({
      method: 'POST'
    , path: '/login'
    , data: data
    })
    .then((res) => {
      const { email: user, authentication_token: token } = res.data.user;

      authAgent.login(user, token, {
        sessionOnly: false
      , cb: () => {
          dispatch({
            type: actionTypes.AUTH_LOGIN_SUCCEED
          , user: user
          });

          if (!router.goBack()) {
            router.transitionTo('/groups');
          }
        }
      });
    })
    .catch ((res) => {
      dispatch({
        type: actionTypes.AUTH_LOGIN_FAILED
      , errors: {
          code: res.status
        , data: res.data
        }
      });
    });
  };
}

export function logout ({ authAgent, router, backPath }) {
  return (dispatch) => {
    authAgent.logout(() => {
      dispatch({
        type: actionTypes.AUTH_LOGGED_OUT
      });

      router.transitionTo('/logout', null, { backPath });
    });
  };
}

