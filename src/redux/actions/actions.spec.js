import * as types from '../todoTypes';
import * as actions from './todoAction';
import { v4 as uuidv4 } from 'uuid';

//generate a mock uuid
jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const item = 'Get the internship';
    const date = "2021-03-01T08:30";
    const expectedAction = {
      type: types.ADD_TODO,
      id: uuidv4(),
      item,
      date,
    }
    expect(actions.addTodo(item, date)).toEqual(expectedAction);
  })
}); 


describe("actions", () => {
  it("should create action to delete a todo item", () => {
    const id = uuidv4();
    const expectedAction = {
      type:types.DELETE_TODO,
      id
    }
    expect(actions.deleteTodo(id)).toEqual(expectedAction);
  })
});

describe("actions", () => {
  it("should create action to toggle a todo", () => {
    const id = uuidv4();
    const expectedAction = {
      type:types.TOGGLE_TODO,
      id
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  })
});

describe("actions", () => {
  it("should create action to restore a todo item from trash", () => {
    const id = uuidv4();
    const expectedAction = {
      type:types.RESTORE_TODO,
      id
    }
    expect(actions.restoreTodo(id)).toEqual(expectedAction);
  })
});

describe("actions", () => {
  it("should create action to permanently delete todo item", () => {
    const id = uuidv4();
    const expectedAction = {
      type:types.REMOVE_TODO,
      id
    }
    expect(actions.removeTodo(id)).toEqual(expectedAction);
  })
});

describe("actions", () => {
  it("should create action to update a todo item", () => {
    const item = 'Get the internship';
    const date = "2021-03-01T08:30";
    const id = uuidv4();
    const expectedAction = {
      type:types.UPDATE_TODO,
      id,
      item,
      date
    }
    expect(actions.updateTodo(item, date, id)).toEqual(expectedAction);
  })
});