import {createStore, combineReducers,applyMiddleware,compose} from 'redux'

import reducer from './ Registration/reducer'
import reducerLogin from './Login/reducerLogin'
import thunk from "redux-thunk";

 
const rootReducer =combineReducers({
    register:reducer,
    login:reducerLogin
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



// import {reducer} from "./reducer";
// import {createStore,applyMiddleware,compose} from "redux";
// import thunk from "redux-thunk";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(thunk))
// );
// console.log(store.getState());


// import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import reducer from './Reducers'
// import RegisterationReducer from "./RegisterationReducer";
// const rootReducer = combineReducers({app: reducer, auth: RegisterationReducer})
// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// export const store = createStore(
//     rootReducer, 
    // createComposer(
    //     applyMiddleware(
    //         thunk,
    //     )
    // )
// )