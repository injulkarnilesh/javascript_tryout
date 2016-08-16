import alt from '../alt';
import ToDoActions from '../actions/ToDoActions'

export class ToDoStore {

  constructor() {
  	this.todos = [];

    this.bindListeners({
    	handleUpdateToDo : ToDoActions.updateToDo,
    	loadToDos : ToDoActions.loadToDos,
    	updateStatus : ToDoActions.updateStatus,
    	updateTitle : ToDoActions.updateTitle
    });
  }

  loadToDos(data) {
  	console.log(data);
  	this.todos = data.todos;
  }

  updateStatus(newStatus) {
  	for(var i = 0; i < this.todos.length; i++) {
  		if(this.todos[i].id === newStatus.id) {
  			this.todos[i].completed = newStatus.completed;
  			break;
  		}
  	}
  }

  updateTitle(newTitle) {
  	for(var i = 0; i < this.todos.length; i++) {
  		if(this.todos[i].id === newTitle.id) {
  			this.todos[i].title = newTitle.title;
  			break;
  		}
  	}
  }

  handleUpdateToDo(newValue) {
	if(newValue.index >=0 && newValue.index < this.todos.length) {
		this.todos[newValue.index] = newValue.value;
	}
  }

}

export default alt.createStore(ToDoStore, 'ToDoStore');
