import * as types from '../constants/ActionTypes/index';

const tickets = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TICKET:
      return [
        ...state,
        {
          id:        action.id,
          title:     action.title,
          text:      action.text,
          priority:  action.priority,
          completed: false
        }
      ];
    case types.TOGGLE_TICKET:
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
