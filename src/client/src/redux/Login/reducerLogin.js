import {LOGIN_USER_FAILURE,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_PASSWORD_REQUEST,LOGIN_PASSWORD_SUCCESS,LOGIN_PASSWORD_FAILURE} from './actionType'
 
const initState = {
    isLogin:false,
    loginData:"",
    messageLogin:"",
    userLoginEmail:"",
    userToken:"",
    userData:""
}

const loginReducer = (state = initState,action)=>{
    // console.log(state.userLoginEmail)
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                // isLogin:false
                // username:action.payload.username,
            }
        case LOGIN_USER_SUCCESS:
            console.log(action.payload.mail,"mail")
            return{
                ...state,
                isLogin:action.payload.status,
                loginData:action.payload,
                messageLogin: action.payload.msg,
                userLoginEmail:action.payload.mail
            }
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                isLogin:action.payload.status,
                messageLogin: action.payload.msg
            }
        case LOGIN_PASSWORD_REQUEST:
            return {
                ...state,
              };
        case LOGIN_PASSWORD_SUCCESS:
            return {
                ...state,
                isLogin:action.payload.status,
                // loginData:action.payload,
                messageLogin: action.payload.msg,
                userToken:action.payload.token,
                userData:action.payload.user_data
            }
        case LOGIN_PASSWORD_FAILURE:
            return{
                ...state,
                isLogin:action.payload.status,
                messageLogin: action.payload.msg
            }
        default:
            return {...state}
    }
}

export default loginReducer