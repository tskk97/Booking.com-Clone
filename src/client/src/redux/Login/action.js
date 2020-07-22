import {LOGIN_USER_FAILURE,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS} from './actionType'

import axios from 'axios'
import {registerUserFailure, registerUserRequest, registerUserSuccess} from "../ Registration/action";

export const loginUserRequest = payload =>({
    type:LOGIN_USER_REQUEST,
    payload:payload
})

export const loginUserSuccess = payload =>({
    type:LOGIN_USER_SUCCESS,
    payload
})

export const loginUserFailure = payload =>({
    type:LOGIN_USER_FAILURE,
    payload
})

export const loginUserData = payload =>dispatch=>{
    dispatch(loginUserRequest(payload))
    console.log(payload)
    var axios = require('axios');
    var data = JSON.stringify({"email":payload});

    var config = {
        method: 'post',
        url: 'http://b267e0559f0c.ngrok.io/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(res => res.data)
        .then(res => dispatch(loginUserSuccess(res)))
        .catch(err => dispatch(loginUserFailure(err)));
}
