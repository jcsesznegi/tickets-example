import React from 'react';
import PropTypes from 'prop-types';

const TicketDetail = ({ ticket }) => (
  <div>
    <h1>#{ticket.id} {ticket.title}</h1>
    <div>{ticket.text}</div>
    <div>Priority: {ticket.priority}</div>
    <div>Completed: {ticket.completed}</div>
  </div>
);

TicketDetail.propTypes = {
  ticket: PropTypes.object.isRequired
}

export default TicketDetail;
