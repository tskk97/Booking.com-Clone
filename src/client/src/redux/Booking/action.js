import {BOOKING_SEARCH_FAILURE,BOOKING_SEARCH_REQUEST,BOOKING_SEARCH_SUCCESS} from './actionType'

import axios from 'axios'

export const bookingSearchRequest = payload=>({
    type:BOOKING_SEARCH_REQUEST,
    payload:payload
})

export const bookingSearchSuccess = payload=>({
    type:BOOKING_SEARCH_SUCCESS,
    payload:payload
})

export const bookingSearchFailure = payload=>({
    type:BOOKING_SEARCH_FAILURE,
    payload:payload
})

export const bookingSearchData = payload=>dispatch=>{
    // console.log(payload,"Booking")    
    dispatch(bookingSearchRequest(payload))
    axios.post("http://4be0e3fbd5d4.ngrok.io/stays/property/"+payload["prop_id"]+"/booking/getOrderId",{
        "num_rooms":payload["num_rooms"],
        "num_adults":payload["num_aduts"],
        "num_child":payload["num_child"]
    })    
    .then(res => dispatch(bookingSearchSuccess(res.data)))
    .catch(err => dispatch(bookingSearchFailure(err)));
}