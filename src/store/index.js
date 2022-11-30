import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const configure = (initialState = {}) => {
    let store = createStoreWithMiddleware(rootReducer, initialState);

    sagaMiddleware.run(sagas, store);

    return store;
};

export default configure();