import {STAYS_SEARCH_FAILURE,STAYS_SEARCH_REQUEST,STAYS_SEARCH_SUCCESS} from './actionType'
import axios from 'axios'
export const staysSearchRequest = payload=>({
    type:STAYS_SEARCH_REQUEST,
    payload:payload
})

export const staysSearchSuccess = payload=>({
    type:STAYS_SEARCH_SUCCESS,
    payload:payload
})

export const staysSearchFailure = payload=>({
    type:STAYS_SEARCH_FAILURE,
    payload:payload
})

export const staysSearchData = payload=>dispatch=>{
    console.log(payload)
    // let city = payload.city
    // let page = payload.page
    // let checkin = payload.checkin.split("-")
    // let checkin_date = checkin[2]
    // let checkin_month = checkin[1]
    // let checkin_year = checkin[0]
    // console.log(checkin,checkin_date,checkin_month,checkin_year)
    // url_reference = http://ngrok.io/stays/search_results?city=Bangalore&checkin_date=25&checkin_month=07&checkin_year=2020&checkout_date=30&checkout_month=07&checkout_year=2020&num_adults=2&num_child=1&num_rooms=2
    
    dispatch(staysSearchRequest(payload))

    axios.get("http://6ea6ae63c2d0.ngrok.io"+payload)
    .then(res => dispatch(staysSearchSuccess(res.data)))
    .catch(err => dispatch(staysSearchFailure(err)));
}