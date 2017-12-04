import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import header from './components/header.component';

export default (
	<Switch>
		<Route path="/login" component={} />
		<Route exact path="/" component={} />
		<Route path="/about" component={header} />
	</Switch>
);
