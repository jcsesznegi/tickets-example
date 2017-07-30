import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';
import tickets from './tickets';
import visibilityFilter from './visibilityFilter';

const StateRecord = Record({
  tickets: undefined,
  visibilityFilter: undefined
});
const ticketApp = combineReducers({
  tickets,
  visibilityFilter
}, StateRecord);

export default ticketApp;
