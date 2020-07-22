import {REGISTER_USER_FAILURE,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS} from './actionType'

const initState = {
    isRegister : false,
    registerData:"",
    message:""
}

const reducer = ((state = initState,action)=>{
    switch(action.type){
        case REGISTER_USER_REQUEST:
            return{
                ...state,
                isRegister:true,
            }

        case REGISTER_USER_SUCCESS:
            return{
                ...state,
                registerData:action.payload,
                message: "",
                isRegister:true
            }
        
        case REGISTER_USER_FAILURE:
            return{
                ...state,
                message:"",
                isRegister:true
            }
        
        default:
            return state
    }
})

export default reducer