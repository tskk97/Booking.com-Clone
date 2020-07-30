import {BOOKING_SEARCH_FAILURE,BOOKING_SEARCH_REQUEST,BOOKING_SEARCH_SUCCESS} from './actionType'

const initState = {
    isBooking:false,
    bookingData:""
}

const reducerBooking =(state = initState,action)=>{
    // console.log(action.payload)
    switch(action.type){
        case BOOKING_SEARCH_REQUEST:
            return{
                ...state
            }
        case BOOKING_SEARCH_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                isBooking:true,
                bookingData:action.payload.data
            }
        case BOOKING_SEARCH_FAILURE:
            return{
                ...state,
                isBooking:false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducerBooking