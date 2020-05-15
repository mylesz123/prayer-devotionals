import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from "./layout/Navbar";
import Dashboard from './dashboard/Dashboard';
import DevotionalDetails from './devotionals/DevotionalDetails';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/devotional/:id" component={DevotionalDetails} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
