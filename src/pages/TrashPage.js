import React from 'react';
import { connect } from 'react-redux';
import DisplayTodo from '../components/DisplayTodo';

function TrashPage({ todos }) {
  return (
    <div>
      <h1 className="page__header">DELETED TODO</h1>
      <ul className="todo__container">
        {todos.map(todo => {
          if (todo.deleted === true) {
            return <DisplayTodo
              key={todo.id}
              id={todo.id}
              item={todo.item}
              due_date={todo.due_date}
              completed_date={todo.completed_date}
              checkbox={false}
              restore="Restore"
              remove="Remove"
            />
          }
          return ""
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state
});
export default connect(mapStateToProps)(TrashPage);
