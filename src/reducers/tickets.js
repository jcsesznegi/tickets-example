import * as types from '../constants/ActionTypes/index';
import { List } from 'immutable';
import Ticket from '../models/Ticket';

const tickets = (state = List(), action) => {
  switch (action.type) {
    case types.ADD_TICKET:
      const t = new Ticket({
        id        : action.id,
        title     : action.title,
        text      : action.text,
        priority  : action.priority,
        completed : false
      });
      return state.push(t);
    case types.UPDATE_TICKET:
      return state.map(ticket => {
        if (ticket.get('id') === action.id) {
	  return ticket.withMutations((t)=>{
            return t.set('title', action.title)
	      .set('text', action.text)
	      .set('priority', action.priority)
	      .set('completed', action.completed);
	  });
	}
	return ticket;
      });
    case types.DELETE_TICKET:
      const ticketFilter = (t) => {
        return t.get('id') === action.id;
      } 
      if (state.some(ticketFilter)) {
        return state.filterNot(ticketFilter);
      }
      return state;
    case types.TOGGLE_TICKET:
      return state.map(ticket => {
        return ((ticket.get('id') === action.id) 
          ? ticket.set('completed', !ticket.get('completed'))
          : ticket);
      });
    default:
      return state;
  }
}

export default tickets;
