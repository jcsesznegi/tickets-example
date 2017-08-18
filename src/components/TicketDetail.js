import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class TicketDetail extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.ticket) {
      this.props.history.push('/');
    }
  }

  handleUpdateClick(id) {
    if (id) {
      this.props.history.push('/ticket/'+id+'/edit');
    }
  }

  nl2br(text) {
    if (!text) {
      return;
    }
    return (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
  }

  renderTicketText(text) {
    return text.split('\n').map((item, index) => {
      return (
        <span key={index}>
          {item}
          <br />
        </span>
      );
    });
  }

  renderTicketDetails() {
    const ticket        = this.props.ticket;
    const onDeleteClick = this.props.onDeleteClick;
    if ( ticket ) {
      let priorityText = '';
      switch(ticket.priority) {
         case 1:
           priorityText = 'Low';
           break;
         case 2:
           priorityText = 'Medium';
           break;
         case 3:
           priorityText = 'High';
           break;
         default:
           break;
      }
      return (
        <div className="ticketBox">
 	  <button className="update" onClick={
    	    (e)=>{
	        this.handleUpdateClick(ticket.id);
	    }
	  }>
	    Update
	  </button>
  	  <button className="delete" onClick={
    	    (e)=>{
	      if(window.confirm("本当にチケットを削除しますか？")) {
	        onDeleteClick();
	      }
	    }
	  }>
	    Delete
	  </button>
          <h1>#{ticket.id} {ticket.title}</h1>
          <div className="details">
	    <table>
	      <tbody>
	        <tr>
	          <th>Priority:</th>
	          <td>{priorityText}</td>
	        </tr>
	        <tr>
	          <th>Resolved:</th>
	          <td>{ticket.completed ? 'true' : 'false' }</td>
	        </tr>
	      </tbody>
	    </table> 
  	  </div>
          <div>{this.renderTicketText(ticket.text)}</div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="page">
        {this.renderTicketDetails()}
        <div>
          <Link to={'/'}>Home</Link>
        </div>
      </div>
    );
  }
};

TicketDetail.propTypes = {
  ticket: PropTypes.shape({
    id:          PropTypes.number.isRequired,
    completed:   PropTypes.bool.isRequired,
    text:        PropTypes.string.isRequired,
    priority:    PropTypes.number.isRequired
  })
}

export default TicketDetail;
