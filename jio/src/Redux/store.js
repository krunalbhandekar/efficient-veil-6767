import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux";
import { Loginreducer } from "./login/loginreducer";
import { reducer as fruitReducer } from "./fruit/reducer";

import thunk from "redux-thunk";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({login:Loginreducer, data:fruitReducer})

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
