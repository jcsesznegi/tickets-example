import React from 'react';
import { connect } from 'react-redux';
import { ToJS } from './ToJS'
import { updateTicket } from '../actions/index';
import { Link } from 'react-router-dom';

const getTicket = (tickets, id) => {
  let ticket;
  tickets.map(t => {
    if (t.get('id') == id) {
      ticket = t;
    }
  });
  return ticket;
}

const mapStateToProps = (state, ownProps) => ({
  ticket: getTicket(state.get('tickets'), ownProps.match.params.id)
});

const mapDispatchToProps = {};

class TicketForm extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.ticket) {
      this.props.history.push('/');
    }
  }

  renderTicketDetails() {
    const ticket        = this.props.ticket;
    const onUpdateClick = this.props.onUpdateClick;
    const dispatch = this.props.dispatch;
    if ( ticket ) {
      let titleInput, textInput, prioritySelect;
      return (
        <div className="ticketBox">
          <form onSubmit={e => {
            e.preventDefault();
            if (!textInput.value.trim() 
            	|| parseInt(prioritySelect.value) <= 0
            ) {
              return;
            }
            dispatch(updateTicket(titleInput.value, textInput.value, parseInt(prioritySelect.value)));
          }}>
            <h1>
	      #{ticket.id}
              <input
	        size={60}
		value={ticket.title}
		ref={node => {
                  titleInput = node;
              }} />
	    </h1>
            <div className="details">
              <table>
                <tr>
                  <th>Priority:</th>
                  <td>
		    <select ref={node => {
                      prioritySelect = node;
                    }}>
                      <option value="">Priority</option>
                      <option value="1">Low</option>
                      <option value="2">Medium</option>
                      <option value="3">High</option>
                    </select>
		    {ticket.priority}
		  </td>
                </tr>
                <tr>
                  <th>Resolved:</th>
                  <td>{ticket.completed ? 'true' : 'false' }</td>
                </tr>
              </table> 
            </div>
            <div>
	      <textarea
	        cols={60}
		rows={10}
		value={ticket.text}
		ref={node => {
                  textInput = node;
              }} />
	    </div>
            <button type="submit">
              Update Ticket
            </button>
          </form>
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

const UpdateTicket = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToJS(TicketForm));

export default UpdateTicket;
