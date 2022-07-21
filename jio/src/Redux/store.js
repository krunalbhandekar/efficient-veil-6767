import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import { Loginreducer } from "./login/loginreducer";
import thunk from "redux-thunk";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({login:Loginreducer})

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
