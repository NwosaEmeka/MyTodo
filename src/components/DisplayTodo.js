import React from 'react';
import { getDate, getTime } from '../utils/formatDate';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { toggleTodo, restoreTodo, deleteTodo, removeTodo } from "../redux/actions/todoAction";
import './displayTodo.css';


function DisplayTodo({ id, item, due_date, completed_date, ...props }) {
  
  const history = useHistory();

  return (
    <li className="todo__card">
      <div className="todo__info">
        {props.checkbox ?
          <input
            type="checkbox"
            className="checkbox"
            onClick={() => props.toggleTodo(id)}
          /> :
          ""
        }
        <h2>{ item }</h2>
      </div>
      <div className="todo_dates">
        <p>Due Date: {getDate(due_date)}{" "}{getTime(due_date)}</p>
        <p>Completed Date: {getDate(completed_date)}{" "}{getTime(completed_date) }</p>
      </div>


      <div className="todo__actions">
        {props.edit ?
        <button className="todo__btn edit_btn" onClick={() => history.push(`/edit/${id}`)}>
            {props.edit}
          </button>
          :""
        }

        {props.delete ?
          <button className="todo__btn delete_btn" onClick={() => {
            if (window.confirm("Add to trash can?")) {
              props.deleteTodo(id)
            }
          }}>
            {props.delete}
          </button>
          : ""
        }

        {props.restore ?
          <button className="todo__btn restore_btn" onClick={() => props.restoreTodo(id)}>
            {props.restore}
          </button>
          : ""
        }
        {props.remove ?
          <button className="todo__btn delete_btn" onClick={() => {
            if (window.confirm("Do want to delete this todo permanently?")) {
              props.removeTodo(id)
            }
          }}>
            {props.remove}
          </button>
          : ""
        }
      </div>
    </li>
  )
}

const mapDisptchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id)),
  restoreTodo: id => dispatch(restoreTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
});
export default connect(null, mapDisptchToProps)(DisplayTodo);
