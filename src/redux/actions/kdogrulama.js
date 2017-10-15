import firebase from 'firebase';
import { Alert } from 'react-native';
import {
   EMAIL_CHANGE,
   PASSWORD_CHANGE,
   LOGIN_USER,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_FAIL
} from './types';

export const emailChanged = (email) => {
    return (dispatch) => {
      return dispatch({
          type: EMAIL_CHANGE,
          payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
      return dispatch({
          type: PASSWORD_CHANGE,
          payload: password
        });
    };
};


export const LoginUser = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
      if (email === '' || password === '') {
        Alert.alert(
          'Mesaj',
          'Her iki alanda dolu olmalıdır.',
          [
            { text: 'Tamam', onPress: () => null }
          ]
        );
      } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          loginSuccess(dispatch, user);
        })
        .catch(() => {
          loginFail(dispatch);
        });
      }

      return dispatch;
    };
};

const loginSuccess = (dispatch, user) => {
  return dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginFail = (dispatch) => {
  Alert.alert(
    'Mesaj',
    'Giriş işlemi başarısız oldu.',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  return dispatch({
    type: LOGIN_USER_FAIL
  });
};
