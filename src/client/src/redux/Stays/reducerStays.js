import {STAYS_SEARCH_FAILURE,STAYS_SEARCH_REQUEST,STAYS_SEARCH_SUCCESS} from './actionType'

const initState = {
    isSearch:false,
    searchData:"",
    // data:[]
}

const reducerStays =(state = initState,action)=>{
    console.log(action.payload)
    switch(action.type){
        case STAYS_SEARCH_REQUEST:
            return{
                ...state
            }
        case STAYS_SEARCH_SUCCESS:
            
            return{
                ...state,
                isSearch:true,
                searchData:action.payload.data
            }
        case STAYS_SEARCH_FAILURE:
            return{
                ...state,
                isSearch:false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducerStays