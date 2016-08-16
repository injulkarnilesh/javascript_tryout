import React from 'react';
import ViewToDo from './ViewToDo';

class ViewToDoList extends React.Component {
	
	render() {
		const toDos = this.props.list.map((item, index) => {
			return (
					<ViewToDo key={item.id} todoitem={item} 
								updateStatus={this.props.updateStatus}
								updateTitle={this.props.updateTitle}>
					</ViewToDo>
				);
		});

		return (<div>{toDos}</div>);	
	}
}

export default ViewToDoList;