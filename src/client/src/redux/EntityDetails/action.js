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
    console.log(payload)
    dispatch(entityListRequest(payload))
    axios.get("http://4be0e3fbd5d4.ngrok.io/stays/property/"+payload)
    .then(res => dispatch(entityListSuccess(res.data)))
    .catch(err => dispatch(entityListFailure(err)));
}