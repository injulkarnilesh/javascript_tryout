import React from 'react';

class EditToDo extends React.Component {
	render() {
		var toDoItem = this.props.text;
		return (
			<div>
				<input type="text" defaultValue={toDoItem} ref='todovalue'
					   onBlur={this.props.update.bind(null, this.props.index)} ></input>
			</div>
		)
	}
}

export default EditToDo;
