
import React from 'react';
import PropTypes from 'prop-types';

const Ticket = ({ onClick, completed, text, priority }) => {
	let ticketClass = '';
	if (completed) {
		ticketClass += 'completed ';
	}
	switch(priority) {
		case 1:
			ticketClass += 'low';
			break;
		case 2:
			ticketClass += 'medium';
			break;
		case 3:
			ticketClass += 'high';
			break;
	}
	return (
	  <li
	    onClick={onClick}
	    className={ticketClass}
	  >
	    {text}
	  </li>
	);
}

Ticket.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired
}

export default Ticket;
