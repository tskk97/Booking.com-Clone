import {REGISTER_USER_FAILURE,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS} from './actionType'

const initState = {
    isRegister : false,
    registerData:""
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
                isRegister:true
            }
        
        case REGISTER_USER_FAILURE:
            return{
                ...state,
                isRegister:true
            }
        
        default:
            return state
    }
})

export default reducer