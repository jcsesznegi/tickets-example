const tickets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TICKET':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          priority: action.priority,
          completed: false
        }
      ];
    case 'TOGGLE_TICKET':
      return state.map(ticket =>
        (ticket.id === action.id) 
          ? {...ticket, completed: !ticket.completed}
          : ticket
      );
    default:
      return state;
  }
}

export default tickets;
