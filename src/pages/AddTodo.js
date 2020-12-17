import React from 'react';
import { connect } from "react-redux";
import TodoForm from '../components/TodoForm';
import { addTodo } from "../redux/actions/todoAction";

function AddTodo({ addTodo }) {
  
  return (
    <>
      <h1 className="page__header">ADD TODO</h1>
      <div className="form__container">
        <TodoForm
          submitAction={addTodo}
          name="ADD TODO"
        />
      </div>
    </>
  );
}

export default connect(null, { addTodo })(AddTodo);
