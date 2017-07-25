import * as types from '../constants/ActionTypes/index';

let nextTicketId = 1;
export const addTicket = (title, text, priority) => ({
  type: types.ADD_TICKET,
  id: nextTicketId++,
  title,
  text,
  priority
});

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTicket = (id) => ({
  type: types.TOGGLE_TICKET,
  id
});
