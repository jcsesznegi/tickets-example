import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

const TicketList = ({ tickets, onTicketClick }) => (
  <ul>
    {tickets.map(ticket =>
      <Ticket
        key={ticket.id}
        {...ticket}
        onClick={() => onTicketClick(ticket.id)}
      />
    )}
  </ul>
);

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTicketClick: PropTypes.func.isRequired
}

export default TicketList;