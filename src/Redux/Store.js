
import {
  legacy_createStore as creatStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer = combineReducers({reducer:reducer} );

const store = creatStore(rootreducer, composeEnhancers(applyMiddleware(thunk)));

export { store };
