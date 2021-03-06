import React from 'react';
import TicketListControls from './TicketListControls';
import AddTicket from '../containers/AddTicket';
import VisibleTicketList from '../containers/VisibleTicketList';

const Home = () => (
  <div className="page">
    <h1>チケット</h1>
    <AddTicket />
    <TicketListControls />
    <VisibleTicketList />
  </div>
);
export default Home;
