import axios from 'axios';

class ToDoApi {
	getToDos(success, error) {
		axios.get('http://jsonplaceholder.typicode.com/todos')
			.then(res => success(res))
			.catch(err => error(err));
	}
}

export default new ToDoApi();