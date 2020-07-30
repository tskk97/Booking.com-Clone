import {createStore, combineReducers,applyMiddleware,compose} from 'redux'

import reducer from './ Registration/reducer'
import reducerLogin from './Login/reducerLogin'
import thunk from "redux-thunk";
import reducerStays from './Stays/reducerStays';
import reducerEntity from './EntityDetails/reducerEntity';
import reducerBooking from './Booking/reducerBooking'

 
const rootReducer =combineReducers({
    register:reducer,
    login:reducerLogin,
    staysSearch:reducerStays,
    entityList:reducerEntity,
    bookingList:reducerBooking
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
