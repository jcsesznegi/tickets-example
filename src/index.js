import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Map } from 'immutable';
import ticketApp from './reducers/index';
import Root from './components/Root';
import initialTickets from './data/initialState';

const initialState = Map({
  tickets : initialTickets,
  visibilityFilter : 'SHOW_ALL'
});
const store = createStore(ticketApp, initialState);

render(
  <Root store={store} />,
  document.getElementById('root')
);
