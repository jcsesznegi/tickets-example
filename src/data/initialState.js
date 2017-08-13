import { List } from 'immutable';
import Ticket from '../models/Ticket';

const ticketData = [];

let limit    = 30;
let ticketId = 1;
for (var i=0; i<limit; i++) {
  ticketData.push(
    {
      id        : ticketId,
      title     : 'サンプルチケット',
      text      : `チチケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容ケット内容
      
チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容チケット内容`,
      priority  : Math.floor((Math.random() * 3) + 1),
      completed : Math.random() >= 0.5
    }
  );
  ticketId++;
}

let initialTickets = List();
ticketData.forEach((d) => {
  let ticket = new Ticket(d);
  initialTickets = initialTickets.push(ticket);
});

export default initialTickets;
