import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_PASSWORD_REQUEST,
    LOGIN_PASSWORD_SUCCESS,
    LOGIN_PASSWORD_FAILURE
} from './actionType';
 
const initState = {
    isAuth: false,
    isLogin:false,
    loginData:"",
    message:"",
    userData:"",
    userEmail:"",
    userToken:"",
    userName:""
}

const loginReducer = (state = initState, action)=>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {
                ...state,
            }
        case LOGIN_USER_SUCCESS:
            if(action.payload.mode === "Google"){
                let temp = (action.payload.user_data[0].email).split("@")
                let uname = temp[0]
                return {
                    ...state,
                    loginData: action.payload,
                    isLogin: action.payload.status,
                    message: action.payload.msg,
                    isAuth: !state.isAuth,
                    userEmail: action.payload.user_data[0].email,
                    userToken: action.payload.token,
                    userData: action.payload.user_data,
                    userName: uname
                }
            }
            else if(action.payload.mode === "Manual"){
                return{
                    ...state,
                    message: action.payload.msg,
                    userEmail:action.payload.mail,
                    isLogin:action.payload.status
                }
            }
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                isLogin:action.payload.status,
                message: action.payload.msg
            }
        case LOGIN_PASSWORD_REQUEST:
            return {
                ...state,
              };
        case LOGIN_PASSWORD_SUCCESS:
            let temp = (action.payload.user_data[0].email).split("@")
            let uname = temp[0]
            return {
                ...state,
                loginData: action.payload,
                isLogin: action.payload.status,
                message: action.payload.msg,
                isAuth: !state.isAuth,
                userEmail: action.payload.user_data[0].email,
                userToken: action.payload.token,
                userData: action.payload.user_data,
                userName: uname
            }
        case LOGIN_PASSWORD_FAILURE:
            return{
                ...state,
                isLogin:action.payload.status,
                message: action.payload.msg
            }
        default:
            return {...state}
    }
}

export default loginReducer