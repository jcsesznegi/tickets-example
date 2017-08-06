import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function renderTicketDetails(ticket) {
  if ( ticket ) {
    return (
      <div>
        <h1>#{ticket.id} {ticket.title}</h1>
        <div>{ticket.text}</div>
        <div>Priority: {ticket.priority}</div>
        <div>Completed: {ticket.completed ? 'true' : 'false' }</div>
      </div>
    );
  }
  return null;
}

const TicketDetail = ({ ticket }) => {
  return (
    <div>
      {renderTicketDetails(ticket)}
      <div>
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  );
  return null;
};

export default TicketDetail;
