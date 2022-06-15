import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/product';

const reducers = combineReducers({
  product: productReducer,
});

const storeConfig = createStore(reducers, compose(applyMiddleware(thunk)));
export default storeConfig;
