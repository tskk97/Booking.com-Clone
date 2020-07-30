import {ENTITY_LIST_REQUEST,ENTITY_LIST_SUCCESS,ENTITY_LIST_FAILURE} from './actionType'
import axios from 'axios'

export const entityListRequest = payload=>({
    type:ENTITY_LIST_REQUEST,
    payload:payload
})

export const entityListSuccess = payload=>({
    type:ENTITY_LIST_SUCCESS,
    payload:payload
})
export const entityListFailure = payload=>({
    type:ENTITY_LIST_FAILURE,
    payload:payload
})

export const entityListData = payload=> dispatch=>{
    
    dispatch(entityListRequest(payload))
    if(Object.keys(payload).length == 1){
        axios.get("http://4be0e3fbd5d4.ngrok.io/stays/property/"+payload["prop_id"])
        .then(res => dispatch(entityListSuccess(res.data)))
        .catch(err => dispatch(entityListFailure(err)));
    }
    else{
        console.log(payload)
        axios.get("http://4be0e3fbd5d4.ngrok.io/stays/property/"+payload["prop_id"],{
            "num_rooms":payload["num_rooms"],
            "num_adults":payload["num_aduts"],
            "num_child":payload["num_child"]
        })
        .then(res => dispatch(entityListSuccess(res.data)))
        .catch(err => dispatch(entityListFailure(err)));

        // var data = JSON.stringify({"num_rooms": payload["num_rooms"], "num_adults": payload["num_adults"], "num_child": payload["num_child"]});
    
        // var config = {
        //     method: 'get',
        //     url: 'http://4be0e3fbd5d4.ngrok.io/stays/property/'+payload["prop_id"],
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data : data
        // };
    
        // axios(config)
        //     .then(res => res.data)
        //     .then(res => dispatch(entityListSuccess(res)))
        //     .catch(err => dispatch(entityListFailure(err)));


// var axios = require('axios');
// var qs = require('qs');
// var data = qs.stringify({
//  'num_rooms': payload["num_rooms"],
// 'num_adults': payload["num_adults"],
// 'num_child': payload["num_child"] 
// });
// var config = {
//   method: 'get',
//   url: 'http://4be0e3fbd5d4.ngrok.io/stays/property/1',
//   headers: { 
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data : data
// };

//                 axios(config)
//                 .then(res => res.data)
//                 .then(res => dispatch(entityListSuccess(res)))
//                 .catch(err => dispatch(entityListFailure(err)));

    }
}