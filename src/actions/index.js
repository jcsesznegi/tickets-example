let nextTicketId = 0;
export const addTicket = (text, priority) => ({
  type: 'ADD_TICKET',
  id: nextTicketId++,
  text,
  priority
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTicket = (id) => ({
  type: 'TOGGLE_TICKET',
  id
});
