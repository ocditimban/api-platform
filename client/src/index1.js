import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

// Replace "book" with the name of the resource type
import book from './reducers/book/';
import bookRoutes from './routes/book';

const store = createStore(
    combineReducers({routing, form, book}), // Don't forget to register the reducers here
    applyMiddleware(thunk),
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
    <Switch>
    {bookRoutes}
    <Route render={() => <h1>Not Found</h1>}/>
</Switch>
</Router>
</Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
