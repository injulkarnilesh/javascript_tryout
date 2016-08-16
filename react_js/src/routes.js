import {Route, IndexRoute} from 'react-router';
import React from 'react';

import Home from './components/Home';
import ToDo from './components/Main';
import Hello from './components/Hello';

const routes = (
	<Route path="/" component={Home}>
		<IndexRoute component={ToDo} />
		<Route path="todo" component={ToDo} />
		<Route path="hello/:name" component={Hello} />
		<Route path="/hi" component={Hello} />
	</Route>
);

export default routes;