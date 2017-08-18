import React from 'react';
import { connect } from 'react-redux';
import { ToJS } from './ToJS'
import { updateTicket } from '../actions/index';
import { Link } from 'react-router-dom';

const getTicket = (tickets, id) => {
  let ticket;
  tickets.map(t => {
    if (t.get('id') === id) {
      ticket = t;
    }
  });
  return ticket;
}

const mapStateToProps = (state, ownProps) => ({
  ticket: getTicket(state.get('tickets'), parseInt(ownProps.match.params.id, 10))
});


class TicketForm extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.props.history.push('/ticket/'+nextProps.ticket.id);
  }

  renderTicketDetails() {
    const ticket        = this.props.ticket;
    const dispatch      = this.props.dispatch;
    if ( ticket ) {
      let titleInput, textInput, prioritySelect, completedSelect;
      return (
        <div className="ticketBox">
          <form onSubmit={e => {
            e.preventDefault();
            if (!textInput.value.trim() 
            	|| parseInt(prioritySelect.value, 10) <= 0
            ) {
              return;
            }
            dispatch(updateTicket(ticket.id, titleInput.value, textInput.value, parseInt(prioritySelect.value, 10), Boolean(completedSelect.value)));
          }}>
            <h1>
	      #{ticket.id}
              <input
	        size={60}
		defaultValue={ticket.title}
		ref={node => {
                  titleInput = node;
              }} />
	    </h1>
            <div className="details">
              <table>
	        <tbody>
                  <tr>
                    <th>Priority:</th>
                    <td>
	              <select
	                ref={node => {
                          prioritySelect = node;
                        }}
                        defaultValue={ticket.priority}
	              >
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                      </select>
	            </td>
                  </tr>
                  <tr>
                    <th>Resolved:</th>
                    <td>
	              <select
	                ref={node => {
                          completedSelect = node;
                        }}
                        defaultValue={ticket.completed}
	              >
                        <option value="false">false</option>
                        <option value="true">true</option>
                      </select>
	            </td>
                  </tr>
		</tbody>
              </table> 
            </div>
            <div>
	      <textarea
	        cols={60}
		rows={10}
		defaultValue={ticket.text}
		ref={node => {
                  textInput = node;
              }} />
	    </div>
            <button className="save" type="submit">
              Save
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
  mapStateToProps
)(ToJS(TicketForm));

export default UpdateTicket;
