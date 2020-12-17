import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './todoForm.css';

function TodoForm({ match, todos, submitAction, name }) {
  let key ="";
  let task = "";
  let date = "";

  // If the action is to edit todo, get the id from the url and set the form
  // fields to the todo items
  if (name === "UPDATE TODO") {
    const item = todos.find(todo => todo.id === match.params.id)
    key = item.id;
    task = item.item;
    date = item.due_date;
  };

  const [myform, setMyform] = useState({ task: task, due_date: date });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    setMyform(previousState => ({
      ...previousState, [inputName]: inputValue
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (myform.task.trim() === "" || myform.due_date.trim() === "") {
      setError('Please fill both fields')
    }
    else {
      submitAction(myform.task, myform.due_date, key)
      setMyform({ task: "", due_date: "" }) // clean the form
      history.push("/") //redirect to the pending list
    }

  }
  return (
    <div className="form_group">
      <form onSubmit={handleSubmit}>
        {error ?
          <p className="errMsg">{error}</p>
          :
          ""
        };
        <div className="form__input">
          <label htmlFor="task">TASK:</label>
          <input
            type="text"
            name="task"
            className="input_field"
            value={myform.task}
            onChange={handleInput}
          />
        </div>
        <div className="form__input">
          <label htmlFor="due_date">DUE DATE:</label>
          <input
            type="datetime-local"
            name="due_date"
            className="input_field"
            value={myform.due_date}
            onChange={handleInput}
          />
        </div>
        <input type="submit" className="btn" value={name} />
      </form>
    </div>
  );
};

export default TodoForm;