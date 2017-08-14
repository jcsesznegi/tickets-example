import React from 'react';
import PropTypes from 'prop-types';
import TicketListItem from './TicketListItem';

const TicketList = ({ tickets }) => {
  let ticketCounter = 0;
  return (
    <table className="ticketList">
      <tr>
        <th>#</th>
        <th>Status</th>
        <th>Subject</th>
        <th>Priority</th>
      </tr>
      {tickets.map(ticket =>
        <TicketListItem
          key={ticket.id}
          even={ticketCounter++%2==0 ? true : false }
          {...ticket}
        />
      )}
    </table>
  );
}

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default TicketList;
