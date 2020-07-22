import {REGISTER_USER_FAILURE,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS} from './actionType'
import axios from 'axios'

export const registerUserRequest = payload =>({
    type:REGISTER_USER_REQUEST
})

export const registerUserSuccess = payload=>({
    type:REGISTER_USER_SUCCESS,
    payload
})

export const registerUserFailure = payload =>({
    type:REGISTER_USER_FAILURE,
    payload
})

export const registerUserData = payload => dispatch =>{

    dispatch(registerUserRequest(payload))

    // Post request
    // return axios
    // .post("http://localhost:8080/auth/register", { ...payload })
    // .then(res => res.data.message)
    // .then(res => dispatch(registerUserSuccess(res)))
    // .catch(err => dispatch(registerUserFailure(err)), console.log("errormjn"));
}

