import React from 'react';
import PropTypes from 'prop-types';
import TicketListItem from './TicketListItem';

const TicketList = ({ tickets, onTicketClick }) => {
  return (
    <ul>
      {tickets.map(ticket =>
        <TicketListItem
          key={ticket.id}
          {...ticket}
          onClick={() => onTicketClick(ticket.id)}
        />
      )}
    </ul>
  );
}

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onTicketClick: PropTypes.func.isRequired
}

export default TicketList;
