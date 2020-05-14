import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from "./layout/Navbar";
import Dashboard from './dashboard/Dashboard';
import DevotionalDetails from './devotionals/DevotionalDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/devotional/:id" component={DevotionalDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
