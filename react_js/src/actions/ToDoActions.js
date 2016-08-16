import alt from '../alt';
import ToDoApi from '../apis/ToDoApi'

class ToDoActions {
	loadToDos() {
		ToDoApi.getToDos(resp => {
			this.dispatch({todos: resp.data});
		}, err => {
			console.log(err);
			console.log('WTF');	
		});
		
	}

	updateToDo(index, newValue) {
		this.dispatch({index : index, value : newValue});
	}

	updateStatus(id, newStatus) {
		this.dispatch({id : id, completed : newStatus});
	}

	updateTitle(id, newTitle) {
		this.dispatch({id : id, title : newTitle});
	}

}

export default alt.createActions(ToDoActions);
