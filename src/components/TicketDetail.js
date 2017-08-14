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

function renderTicketDetails(ticket, onDeleteClick) {
  if ( ticket ) {
    return (
      <div className="ticketBox">
	<button onClick={(e)=>{onDeleteClick();}}>
		Delete
	</button>
        <h1>#{ticket.id} {ticket.title}</h1>
        <div className="details">
	  <table>
	    <tr>
	      <th>Priority:</th>
	      <td>{ticket.priority}</td>
	    </tr>
	    <tr>
	      <th>Resolved:</th>
	      <td>{ticket.completed ? 'true' : 'false' }</td>
	    </tr>
	  </table> 
	</div>
        <div>{renderTicketText(ticket.text)}</div>
      </div>
    );
  }
  return null;
}

const TicketDetail = ({ ticket, onDeleteClick }) => {
  return (
    <div className="page">
      {renderTicketDetails(ticket, onDeleteClick)}
      <div>
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  );
  return null;
};

export default TicketDetail;
