// Action creators
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  RESTORE_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from '../todoTypes';

import { v4 as uuidv4 } from 'uuid';

export const addTodo = (item, date) => ({
  type: ADD_TODO,
  id: uuidv4(),
  item,
  date
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const restoreTodo = id => ({
  type: RESTORE_TODO,
  id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const updateTodo = (item, date, id) => ({
  type: UPDATE_TODO,
  id,
  item,
  date
});

