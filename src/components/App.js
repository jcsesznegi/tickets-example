import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Ticket from '../containers/Ticket';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ticket/:id" component={Ticket} />
    </Switch>
    <Footer />
  </div>
);
export default App;
