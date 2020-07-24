import {STAYS_SEARCH_FAILURE,STAYS_SEARCH_REQUEST,STAYS_SEARCH_SUCCESS} from './actionType'

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
    console.log(payload.checkin)
    dispatch(staysSearchRequest(payload))

    var axios = require('axios');
    var data = JSON.stringify({"city":payload.city});

    var config = {
        method: 'post',
        // url: 'http://b8b4cb2b4039.ngrok.io/stays',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(res => res.data)
        .then(res => dispatch(staysSearchSuccess(res)))
        .catch(err => dispatch(staysSearchFailure(err)));
}