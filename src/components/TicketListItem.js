import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TicketListItem = ({ onClick, id, completed, title, priority, even }) => {
  let ticketClass = '';
  if (completed) {
    ticketClass += 'completed ';
  }
  let priorityText = '';
  switch(priority) {
    case 1:
      ticketClass += 'low ';
      priorityText = '低'; 
      break;
    case 2:
      ticketClass += 'medium ';
      priorityText = '中'; 
      break;
    case 3:
      ticketClass += 'high ';
      priorityText = '高'; 
      break;
  }
  if (even) {
    ticketClass += 'even';
  }
  return (
    <tr
      onClick={onClick}
      className={ticketClass}
    >
      <td className="id">
        <Link to={'/ticket/'+id}>{id}</Link>
      </td>
      <td className="status">
	{completed ? 'Resolved' : 'New'}
      </td>
      <td className="title">
	<Link to={'/ticket/'+id}>{title}</Link>
      </td>
      <td className="priority">
	{priorityText}
      </td>
    </tr>
  );
}

TicketListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired
}

export default TicketListItem;
