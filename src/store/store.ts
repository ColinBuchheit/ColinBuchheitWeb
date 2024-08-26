import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Adjust the path as necessary

// Configure and create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Export the store so it can be used in the application
export default store;
