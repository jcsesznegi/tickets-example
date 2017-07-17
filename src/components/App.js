import React from 'react';
import Footer from './Footer';
import AddTicket from '../containers/AddTicket';
import VisibleTicketList from '../containers/VisibleTicketList';

const App = () => (
  <div>
    <AddTicket />
    <VisibleTicketList />
    <Footer />
  </div>
);
export default App;
