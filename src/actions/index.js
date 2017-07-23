let nextTicketId = 1;
export const addTicket = (title, text, priority) => ({
  type: 'ADD_TICKET',
  id: nextTicketId++,
  title,
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
