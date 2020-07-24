import {createStore, combineReducers,applyMiddleware,compose} from 'redux'

import reducer from './ Registration/reducer'
import reducerLogin from './Login/reducerLogin'
import thunk from "redux-thunk";
import reducerStays from './Stays/reducerStays';

 
const rootReducer =combineReducers({
    register:reducer,
    login:reducerLogin,
    staysSearch:reducerStays
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    createComposer(
        applyMiddleware(
            thunk,
        )
    )
)
export default store
