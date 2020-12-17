import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { NavTab } from 'react-router-tabs';
import './App.css';
import CompletedTodo from './pages/CompletedTodo';
import PendingTodo from './pages/PendingTodo';
import TrashPage from './pages/TrashPage';
import ErrorPage from './pages/ErrorPage';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';

const App = () => {
  return (
   <>
      <div className="nav__bar">
        <div className="nav_items">
          <NavTab className="nav-tab"activeClassName="active" to="/pending">Pending</NavTab>
          <NavTab className="nav-tab"activeClassName="active" to="/completed">Completed</NavTab>
          <NavTab className="nav-tab"activeClassName="active" to="/add">Add New</NavTab>
          <NavTab className="nav-tab"activeClassName="active" to="/trash">Trash</NavTab>
        </div>
        
      </div>
      
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect replace to="/pending" />}
          />
          <Route path="/pending" component={PendingTodo} />
          <Route path="/completed" component={CompletedTodo} />
          <Route path="/add" component={AddTodo} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/trash" component={TrashPage} />
          <Route component={ErrorPage}/>
        </Switch>      
    </> 
 );
}

export default App;
