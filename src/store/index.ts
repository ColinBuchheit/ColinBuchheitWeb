import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Import the combined root reducer

// Configure and create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Export the store so it can be used in the application
export default store;
