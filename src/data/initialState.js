import { List } from 'immutable';
import Ticket from '../models/Ticket';

const ticketData = [
  {
    id        : 1,
    title     : 'test title',
    text      : 'test text',
    priority  : 1,
    completed : false
  },
  {
    id        : 2,
    title     : 'test title',
    text      : 'test text',
    priority  : 1,
    completed : false
  },
  {
    id        : 3,
    title     : 'test title',
    text      : 'test text',
    priority  : 1,
    completed : false
  },
  {
    id        : 4,
    title     : 'test title',
    text      : 'test text',
    priority  : 1,
    completed : false
  },
  {
    id        : 5,
    title     : 'test title',
    text      : 'test text',
    priority  : 1,
    completed : false
  },

];

let initialTickets = List();
ticketData.forEach((d) => {
  let ticket = new Ticket(d);
  initialTickets = initialTickets.push(ticket);
});

export default initialTickets;
