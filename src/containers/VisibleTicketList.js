import { connect } from 'react-redux';
import { toggleTicket } from '../actions';
import TicketList from '../components/TicketList';

const getVisibleTickets = (tickets, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tickets;
    case 'SHOW_COMPLETED':
      return tickets.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return tickets.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = (state) => { 
return {
  tickets: getVisibleTickets(state.get('tickets'), state.get('visibilityFilter'))
}};

const mapDispatchToProps = {
  onTicketClick: toggleTicket
}

const VisibleTicketList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketList);

export default VisibleTicketList;
