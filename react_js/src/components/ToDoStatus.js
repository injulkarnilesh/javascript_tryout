import React from 'react';

class ToDoStatus extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			selected : props.completed
		}
		this.handleChange = (e) => {
			var onUpdate = this.props.onUpdate;
		    var selected = !this.state.selected;
		    this.setState({selected: selected});
		    onUpdate(selected);
		}
	}
	
	render() {
		return (
			<span className="todoitem-status">
				<input type="checkbox" defaultChecked={this.state.selected} 
						onChange={this.handleChange}></input>
			</span>
		)
	}
}

export default ToDoStatus;