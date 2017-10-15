import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';


const configureStore = preloadedState => {
  const createdStore = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk, preloadedState, createLogger())
  );
  if (module.hot) {
    console.log(module.hot);
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      createdStore.replaceReducer(nextRootReducer);
    });
  }


  return createdStore;
};

export default configureStore;
