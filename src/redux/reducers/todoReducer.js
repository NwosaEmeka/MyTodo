import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  RESTORE_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from '../todoTypes';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          item: action.item,
          due_date: action.date,
          completed_date: '',
          completed: false,
          deleted: false,
        }
      ];
    
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? {
        ...todo,
        completed: !todo.completed,
        completed_date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore', hour12: false })
      } : todo);
    
    case DELETE_TODO:
      return state.map(todo => todo.id === action.id ? {
        ...todo,
        deleted: true
      } : todo);
    
    case RESTORE_TODO:
      return state.map(todo => todo.id === action.id ? {
        ...todo,
        deleted: false
      } : todo);
    
    case UPDATE_TODO:
      return state.map(todo => todo.id === action.id ? {
        ...todo,
        item: action.item,
        due_date: action.date,
      } : todo);
    
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    
    default:
      return state;
  }
}

export default todoReducer;