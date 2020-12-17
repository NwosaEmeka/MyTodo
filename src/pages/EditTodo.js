import React from 'react';
import { connect } from "react-redux";
import TodoForm from '../components/TodoForm';
import { updateTodo } from "../redux/actions/todoAction";

function EditTodo({ updateTodo, todos, match }) {
  
  return (
    <>
      <h1 className="page__header">EDIT TODO</h1>
      <div className="form__container">
        <TodoForm
          submitAction={updateTodo}
          name="UPDATE TODO"
          todos={todos}
          match={match}
        />
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  todos: state
});
export default connect(mapStateToProps, { updateTodo })(EditTodo);