import { connect } from 'react-redux';
import { ToJS } from './ToJS'
import TicketDetail from '../components/TicketDetail';
import { deleteTicket } from '../actions/index';

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

const mapDispatchToProps = (dispatch, ownProps) => {
	return ({
	  onDeleteClick : () => {
            dispatch(deleteTicket(parseInt(ownProps.match.params.id,10)));
          }
	});
};

const Ticket = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToJS(TicketDetail));

export default Ticket;
