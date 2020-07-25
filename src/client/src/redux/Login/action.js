import {LOGIN_USER_FAILURE,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_PASSWORD_REQUEST,LOGIN_PASSWORD_SUCCESS,LOGIN_PASSWORD_FAILURE} from './actionType'

import axios from 'axios'
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

export const loginPasswordUserRequest = payload =>({
    type:LOGIN_PASSWORD_REQUEST,
    payload
})

export const loginPasswordUserSuccess = payload =>({
    type:LOGIN_PASSWORD_SUCCESS,
    payload
})

export const loginPasswordUserFailure = payload =>({
    type:LOGIN_PASSWORD_FAILURE,
    payload
})

export const loginUserData = payload =>dispatch=>{
    console.log(payload)
    dispatch(loginUserRequest(payload))
    var mode = payload.mode
    var axios = require('axios');
    if(mode === "Google"){
        var data = JSON.stringify({"email": payload.email, "password": payload.password, "mode": mode});
    
        var config = {
            method: 'post',
            url: 'http://4a6c43bc9d5d.ngrok.io/login',
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
    else if(mode === "Manual"){
        var data = JSON.stringify({"email": payload.email, "mode": mode});
    
        var config = {
            method: 'post',
            url: 'http://4a6c43bc9d5d.ngrok.io/login',
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
}

export const loginPasswordUserData = payload =>dispatch=>{
    console.log(payload)
    dispatch(loginPasswordUserRequest(payload))
    var axios = require('axios');
    var data = JSON.stringify({"email":payload.email, "password":payload.password});

    var config = {
        method: 'post',
        url: 'http://4a6c43bc9d5d.ngrok.io/login/password',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(res => res.data)
        .then(res => dispatch(loginPasswordUserSuccess(res)))
        .catch(err => dispatch(loginPasswordUserFailure(err)));
}

