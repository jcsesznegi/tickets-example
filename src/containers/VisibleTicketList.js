import { connect } from 'react-redux';
import { ToJS } from './ToJS'
import TicketList from '../components/TicketList';

const getVisibleTickets = (tickets, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tickets;
    case 'SHOW_COMPLETED':
      return tickets.filter(t => t.get('completed'));
    case 'SHOW_ACTIVE':
      return tickets.filter(t => !t.get('completed'));
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = (state) => { 
  return {
    tickets: getVisibleTickets(state.get('tickets'), state.get('visibilityFilter'))
  };
}

const mapDispatchToProps = {}

const VisibleTicketList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToJS(TicketList));

export default VisibleTicketList;
