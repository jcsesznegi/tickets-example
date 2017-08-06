import { connect } from 'react-redux';
import { ToJS } from './ToJS'
import TicketDetail from '../components/TicketDetail';

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

const Ticket = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToJS(TicketDetail));

export default Ticket;
