import { combineReducers } from 'redux';

// Example reducer (you'll have your actual reducers here)
const exampleReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Combine all reducers into one root reducer
const rootReducer = combineReducers({
  example: exampleReducer,
  // Add other reducers here
});

export default rootReducer;
