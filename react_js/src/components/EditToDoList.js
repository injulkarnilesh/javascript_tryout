import React from 'react';
import EditToDo from './EditToDo'

class EditToDoList extends React.Component {
	render() {
		const toDoItems = this.props.list.map( (item, index) => {
  			return (
  				<EditToDo text={item} key={index} index={index} 
  							update={this.props.update} ref={'todo' + index}>
				</EditToDo>
			);
  		});
		return (
			<div>
				{toDoItems}
			</div>
		)
	}
}

export default EditToDoList;