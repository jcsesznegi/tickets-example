import { connect } from 'react-redux';
import TicketDetail from '../components/TicketDetail';

const getTicket = (tickets, id) => {
  let ticket = {};
  tickets.map(t => {
    if (t.id == id) {
      ticket = t;
    }
  });
  return ticket;
}

const mapStateToProps = (state, ownProps) => ({
  ticket: getTicket(state.tickets, ownProps.match.params.id)
});

const mapDispatchToProps = {};

const Ticket = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetail);

export default Ticket;
