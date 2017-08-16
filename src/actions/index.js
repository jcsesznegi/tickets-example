import * as types from '../constants/ActionTypes/index';
import initialTickets from '../data/initialState';

let nextTicketId = initialTickets.size + 1;
export const addTicket = (title, text, priority) => ({
  type: types.ADD_TICKET,
  id: nextTicketId++,
  title,
  text,
  priority
});

export const updateTicket = (id, title, text, priority) => ({
  type: types.UPDATE_TICKET,
  id,
  title,
  text,
  priority
});

export const deleteTicket = (id) => ({
  type: types.DELETE_TICKET,
  id
});

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTicket = (id) => ({
  type: types.TOGGLE_TICKET,
  id
});
