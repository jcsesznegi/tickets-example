import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToJS } from './ToJS'
import TicketDetail from '../components/TicketDetail';
import { deleteTicket, toggleTicket } from '../actions/index';

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
