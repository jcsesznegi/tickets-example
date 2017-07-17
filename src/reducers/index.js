import { combineReducers } from 'redux';
import tickets from './tickets';
import visibilityFilter from './visibilityFilter';

const ticketApp = combineReducers({
  tickets,
  visibilityFilter
});

export default ticketApp;
