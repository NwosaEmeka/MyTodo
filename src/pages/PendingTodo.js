import React from 'react';
import { connect } from 'react-redux';
import DisplayTodo from '../components/DisplayTodo';


function PendingTodo({todos}) {
  return (
    <div>
      <h1 className="page__header">PENDING TODO</h1>
      <ul className="todo__container">
        {todos.map(todo => {
          if (todo.completed === false && todo.deleted === false) {
            return <DisplayTodo
              key={todo.id}
              id={todo.id}
              item={todo.item}
              due_date={todo.due_date}
              completed_date={""}
              checkbox={true}
              edit="Edit"
              delete="Delete"
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
export default connect(mapStateToProps)(PendingTodo);
