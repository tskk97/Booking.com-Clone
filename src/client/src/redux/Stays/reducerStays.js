import {STAYS_SEARCH_FAILURE,STAYS_SEARCH_REQUEST,STAYS_SEARCH_SUCCESS} from './actionType'

const initState = {
    isSearch:false,
    searchData:"",
    facilitiesData:"",
    reviewData:"",
    ratingData:"",
    roomData:""
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
                searchData:action.payload.data,
                facilitiesData:action.payload.facilities,
                reviewData:action.payload.review_score,
                ratingData:action.payload.star_rating,
                roomData:action.payload.room_facilities

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