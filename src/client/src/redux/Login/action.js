import {LOGIN_USER_FAILURE,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS} from './actionType'

import axios from 'axios'

export const loginUserRequest = payload =>({
    type:LOGIN_USER_REQUEST,
    payload:payload
})

export const loginUserSuccess = payload =>({
    type:LOGIN_USER_SUCCESS,
    payload
})

export const loginUserFailue = payload =>({
    type:LOGIN_USER_FAILURE,
    payload
})

export const loginUserData = payload =>dispatch=>{
    dispatch(loginUserRequest(payload))

    return axios
    .post("", { ...payload })
    .then(res => {
      return res.data;
    })
    .then(res => dispatch(loginUserSuccess(res)))
    .catch(err => {
      dispatch(loginUserFailure(err));
    });
}
