import React from 'react';
import TicketListControls from './TicketListControls';
import AddTicket from '../containers/AddTicket';
import VisibleTicketList from '../containers/VisibleTicketList';

const Home = () => (
  <div>
    <AddTicket />
    <VisibleTicketList />
    <TicketListControls />
  </div>
);
export default Home;
