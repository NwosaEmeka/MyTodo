import { createStore } from 'redux';
import { getStateFromLS, saveStateToLS } from '../localStorage';
import todoReducer from '../reducers/todoReducer';



const storeConfig = () => {
  const persistedState = getStateFromLS();

  const store = createStore(todoReducer, persistedState);

  // calls the subscribe method whenever there is change in the store
  store.subscribe(() => {
    saveStateToLS(store.getState());
  })
  return store;
}

export default storeConfig;