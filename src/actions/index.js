let nextTicketId = 0;
export const addTicket = (text) => ({
  type: 'ADD_TICKET',
  id: nextTicketId++,
  text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTicket = (id) => ({
  type: 'TOGGLE_TICKET',
  id
});
