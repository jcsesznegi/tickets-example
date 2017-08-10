import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function nl2br(text) {
  if (!text) {
    return;
  }
  return (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
}

function renderTicketText(text) {
  return text.split('\n').map((item) => {
    return (
      <span>
        {item}
        <br />
      </span>
    );
  });
}

function renderTicketDetails(ticket) {
  if ( ticket ) {
    return (
      <div className="page">
        <h1>#{ticket.id} {ticket.title}</h1>
        <div>{renderTicketText(ticket.text)}</div>
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
