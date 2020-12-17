import * as types from '../todoTypes';
import todoReducer from './todoReducer'
import { v4 as uuidv4 } from 'uuid';

//generate a mock uuid
jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

// mock date time
const mockDate = new Date(1610936640000) //"1/18/2021, 10:24:00"
const spy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(todoReducer(undefined, {})).toEqual([])
  })

  it('should add a todo item', () => {
    const item = 'Get the internship';
    const date = "2021-03-01T08:30";
    const id = uuidv4();
    expect(todoReducer([], {
      type: types.ADD_TODO,
      item,
      date,
      id
    })
    ).toEqual([
      {
        id,
        item,
        due_date: date,
        completed_date: '',
        completed: false,
        deleted: false
      }
    ]);
  });
});


describe("reducers", () => {
  const id = uuidv4();
  it("should handle toggle todo", () => {
    expect(todoReducer(
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          item: 'Get the internship',
          due_date: "2021-03-01T08:30",
          completed_date: '',
          completed: false,
          deleted: false
        }
      ],
      {
        type: types.TOGGLE_TODO,
        id
      }
    )
    ).toEqual([
      {
        id: '00000000-0000-0000-0000-000000000000',
        item: 'Get the internship',
        due_date: "2021-03-01T08:30",
        completed_date: "1/18/2021, 10:24:00",
        completed: true,
        deleted: false
      }
    ]);
  });
});


describe("reducers", () => {
  const id = uuidv4();
  it("should handle delete todo", () => {
    expect(todoReducer(
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          item: 'Get the internship',
          due_date: "2021-03-01T08:30",
          completed_date: "1/18/2021, 10:24:00",
          completed: true,
          deleted: false
        }
      ],
      {
        type: types.DELETE_TODO,
        id
      }
    )
    ).toEqual([
      {
        id: '00000000-0000-0000-0000-000000000000',
        item: 'Get the internship',
        due_date: "2021-03-01T08:30",
        completed_date: "1/18/2021, 10:24:00",
        completed: true,
        deleted: true
      }
    ]);
  });
});

describe("reducers", () => {
  const id = uuidv4();
  it("should handle delete todo", () => {
    expect(todoReducer(
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          item: 'Get the internship',
          due_date: "2021-03-01T08:30",
          completed_date: "1/18/2021, 10:24:00",
          completed: true,
          deleted: true
        }
      ],
      {
        type: types.RESTORE_TODO,
        id
      }
    )
    ).toEqual([
      {
        id: '00000000-0000-0000-0000-000000000000',
        item: 'Get the internship',
        due_date: "2021-03-01T08:30",
        completed_date: "1/18/2021, 10:24:00",
        completed: true,
        deleted: false
      }
    ]);
  });
});

describe("reducers", () => {
  const id = uuidv4();
  const item = "I will work hard";
  const date = "2021-04-01T10:30";
  it("should handle delete todo", () => {
    expect(todoReducer(
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          item: 'Get the internship',
          due_date: "2021-03-01T08:30",
          completed_date: "1/18/2021, 10:24:00",
          completed: true,
          deleted: false
        }
      ],
      {
        type: types.UPDATE_TODO,
        id,
        item,
        date
      }
    )
    ).toEqual([
      {
        id: '00000000-0000-0000-0000-000000000000',
        item: "I will work hard",
        due_date: "2021-04-01T10:30",
        completed_date: "1/18/2021, 10:24:00",
        completed: true,
        deleted: false
      }
    ]);
  });
});


describe("reducers", () => {
  const id = uuidv4();
  it("should handle delete todo", () => {
    expect(todoReducer(
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          item: "I will work hard",
          due_date: "2021-04-01T10:30",
          completed_date: "1/18/2021, 10:24:00",
          completed: true,
          deleted: false
        }
      ],
      {
        type: types.REMOVE_TODO,
        id
      }
    )
    ).toEqual([]);
  });
});