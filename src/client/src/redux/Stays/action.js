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
    let query = payload.city
    // let checkin = payload.checkin.split("-")
    // let checkin_date = checkin[2]
    // let checkin_month = checkin[1]
    // let checkin_year = checkin[0]
    // console.log(checkin,checkin_date,checkin_month,checkin_year)
    dispatch(staysSearchRequest(payload))
    // http://ngrok.io/stays/search_results?city=Bangalore&checkin_date=25&checkin_month=07&checkin_year=2020&checkout_date=30&checkout_month=07&checkout_year=2020&num_adults=2&num_child=1&num_rooms=2

    axios
    .get("http://b8b4cb2b4039.ngrok.io/stays/search_results", {
      params: {
        city: query
      }
    })
    .then(res => dispatch(staysSearchSuccess(res.data)))
    .catch(err => dispatch(staysSearchFailure(err)));

//     var axios = require('axios');
//     var data = JSON.stringify({"city":payload.city});

//     var config = {
//         method: 'post',
//         url: 'http://b8b4cb2b4039.ngrok.io/stays/search_results?'+payload.city,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data : data
//     };

//     axios(config)
//         .then(res => console.log(res.data))
//         .then(res => dispatch(staysSearchSuccess(res)))
//         .catch(err => dispatch(staysSearchFailure(err)));
}