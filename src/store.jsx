import { createStore, combineReducers } from 'redux';

// Define initial state
const initialTasksState = [];

// Define task reducer
const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'EDIT_TASK':
      return state.map(task => 
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    case 'TOGGLE_TASK':
      return state.map(task => 
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    default:
      return state;
  }
};

// Combine reducers if you have more than one
const rootReducer = combineReducers({
  tasks: tasksReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
