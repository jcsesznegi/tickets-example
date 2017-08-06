import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TicketListItem = ({ onClick, id, completed, title, priority }) => {
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
	    <Link to={'/ticket/'+id}>#{id} {title}</Link>
	  </li>
	);
}

TicketListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired
}

export default TicketListItem;
