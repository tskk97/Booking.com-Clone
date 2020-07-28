import {REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS,REGISTER_PASSWORD_FAILURE,REGISTER_PASSWORD_SUCCESS,REGISTER_PASSWORD_REQUEST} from './actionType'
// import axios from 'axios'

export const registerUserRequest = payload => ({
    type: REGISTER_USER_REQUEST
})

export const registerUserSuccess = payload => ({
    type: REGISTER_USER_SUCCESS,
    payload
})

export const registerUserFailure = payload => ({
    type: REGISTER_USER_FAILURE,
    payload
})

export const registerPasswordUserSuccess = payload=>({
    type:REGISTER_PASSWORD_SUCCESS,
    payload
})

export const registerPasswordUserRequest = payload =>({
    type:REGISTER_PASSWORD_REQUEST,
    payload
})

export const registerPasswordUserFailure = payload=>({
    type:REGISTER_PASSWORD_FAILURE,
    payload
})

export const registerUserData = payload => dispatch => {
    // console.log(payload)
    dispatch(registerUserRequest(payload))
    var mode = payload.mode
    var axios = require('axios');
    if(mode === "Google"){
        var data = JSON.stringify({"email": payload.email, "password": payload.password, "mode": mode});

        var config = {
            method: 'post',
            url: 'http://bbf519780d4f.ngrok.io/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    
        axios(config)
            .then(res => res.data)
            .then(res => dispatch(registerUserSuccess(res)))
            .catch(err => dispatch(registerUserFailure(err)));
    }
    else if(mode === "Manual"){
        var data = JSON.stringify({"email": payload.email, "mode": mode});
    
        var config = {
            method: 'post',
            url: 'http://bbf519780d4f.ngrok.io/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    
        axios(config)
            .then(res => res.data)
            .then(res => dispatch(registerUserSuccess(res)))
            .catch(err => dispatch(registerUserFailure(err)));
    }
}


export const registerPasswordUserData = payload => dispatch => {
    console.log(payload)
    dispatch( registerPasswordUserRequest(payload))
    var axios = require('axios');
    var data = JSON.stringify({"email": payload.email, "password":payload.password});

    var config = {
        method: 'post',
        url: 'http://bbf519780d4f.ngrok.io/register/password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(res => res.data)
        .then(res => dispatch(registerPasswordUserSuccess(res)))
        .catch(err => dispatch(registerPasswordUserFailure(err)));
}

