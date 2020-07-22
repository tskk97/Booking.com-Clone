import {LOGIN_USER_FAILURE,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS} from './actionType'
 
const initState = {
    isLogin:false,
    loginData:"",
    messageLogin:""
}

const loginReducer = (state = initState,action)=>{

    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                // isLogin:false
                // username:action.payload.username,
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                isLogin:action.payload.status,
                loginData:action.payload,
                messageLogin: action.payload.msg
            }
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                isLogin:action.payload.status,
                messageLogin: action.payload.msg
            }
        default:
            return state 
    }
}

export default loginReducer