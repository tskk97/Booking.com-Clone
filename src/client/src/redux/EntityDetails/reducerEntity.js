import {ENTITY_LIST_REQUEST,ENTITY_LIST_SUCCESS,ENTITY_LIST_FAILURE} from './actionType'

const initState = {
    isEntity:false,
    entityData:""
}

const reducerEntity =(state = initState,action)=>{
    // console.log(action.payload)
    switch(action.type){
        case  ENTITY_LIST_REQUEST:
            return{
                ...state
            }
        case ENTITY_LIST_SUCCESS:
            console.log(action.payload.data[0])
            return{
                ...state,
                isEntity:true,
                entityData:action.payload.data[0]
            }
        case ENTITY_LIST_FAILURE:
            return{
                ...state,
                isEntity:false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducerEntity
