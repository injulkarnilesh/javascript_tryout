import React from 'react';
import ToDoStatus from './ToDoStatus';
import EditableToDoTitle from './EditableToDoTitle';

class ViewToDo extends React.Component {

	constructor(props) {
		super(props);

		this.updateStatus = (newStatus) => {
			var onStatusUpdate = this.props.updateStatus;
			onStatusUpdate(this.props.todoitem.id, newStatus);
		};

		this.updateTitle = (newTitle) => {
			var onTitleUpdate = this.props.updateTitle;
			onTitleUpdate(this.props.todoitem.id, newTitle);
		};
	}
	
	render() {
		var item = this.props.todoitem;
		
		return (
			<div key={item.id}>
				<div className="todoitem">
					<span className="todoitem-id">{item.id}</span>
					<ToDoStatus completed={item.completed} onUpdate={this.updateStatus}></ToDoStatus>
					<EditableToDoTitle todo={item} onUpdate={this.updateTitle}></EditableToDoTitle>
				</div>
			</div>
		)
	}

}

export default ViewToDo;