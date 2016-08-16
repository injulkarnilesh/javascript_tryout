import React from 'react';
import classNames from 'classnames';

class EditableToDoTitle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isEditing : false
		}

		this.edit = (isEditing) => {
			this.setState({
				isEditing : isEditing
			});
		}

		this.cancleEdit = () => {
			this.edit(false);
		}

		this.saveEdit = () => {
			var newTitle = this.refs.editTitle.value;
			this.props.onUpdate(newTitle);	
			this.edit(false);
		}
	}

	render() {
		var title = this.props.todo.title;
		var isCompleted = this.props.todo.completed;
		var titleClasses = classNames(
				'todoitem-value',
				{ 
					'todoitem-completed' : isCompleted 
				}
			);
		var editableToDo = '';
		
		if(this.state.isEditing) {
			editableToDo = (
				<span>
					<input type="text" defaultValue={title} ref="editTitle"></input>
					<button className="editButton" onClick={this.cancleEdit}>Cancle</button>
					<button className="editButton" onClick={this.saveEdit}>Save</button>
				</span>
			);
		} else {
			editableToDo = (
				<span className={titleClasses} onClick={this.edit.bind(this, true)}> {title} </span>
			);
		}

		return (
			<span>{editableToDo}</span>
		);
	}
}

export default EditableToDoTitle;