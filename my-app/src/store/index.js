import { createStore,  compose, applyMiddleware} from 'redux';
import reducer from './reducer';
import ajaxMiddleware from './middlewares/ajaxMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
      ajaxMiddleware,
    )
);

const store = createStore(reducer, enhancers);

export default store;