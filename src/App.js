import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hauses from './pages/Hauses';
import Stores from './pages/Stores';
import Dashboard from './pages/Dashboard';
import Custmers from './pages/Custmers';
import Users from './pages/Users';
import Transactions from './pages/Transactions';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/hauses' component={Hauses} />
          <Route path='/custmers' component={Custmers} />
          <Route path='/stores' component={Stores} />
          <Route path='/users' component={Users} />
          <Route path='/transactions' component={Transactions} />
        </Switch>
      </Router>
  );
}

export default App;
