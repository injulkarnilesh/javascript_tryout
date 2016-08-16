require('normalize.css');
require('styles/App.css');

import React from 'react';
import EditToDoList from './EditToDoList';
import ViewToDoList from './ViewToDoList';
import ToDoStore from '../stores/ToDoStore';
import ToDoActions from '../actions/ToDoActions'

class AppComponent extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = ToDoStore.getState();

    this.change = (state) => {
      this.setState(state);
    }
  }

  componentDidMount() {
    ToDoStore.listen(this.change);
    ToDoActions.loadToDos();
  }

  componentWillUnmount() {
    ToDoStore.unlisten(this.change);
  }

  
  updateToDo(index) {
    const itemRef = 'todo' + index;
  	const newValue = this.refs.todolist.refs[itemRef].refs.todovalue.value;
    ToDoActions.updateToDo(index, newValue);
  }

  updateStatus(id, newStatus) {
    console.log('Main', id, newStatus);
    ToDoActions.updateStatus(id, newStatus);
  }

  updateTitle(id, newTitle) {
    console.log(id, newTitle);
    ToDoActions.updateTitle(id, newTitle);
  }

  /*
  const update = this.updateToDo.bind(this);
  <EditToDoList list={this.state.todos} update={update} ref="todolist"></EditToDoList>
  */

  render() {
  	const updateStatus = this.updateStatus.bind(this);
    return (
      <div className="index">
          <ViewToDoList list={this.state.todos} updateStatus={this.updateStatus}
                        updateTitle={this.updateTitle}>
          </ViewToDoList>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
