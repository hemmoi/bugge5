import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import BugListing from './pages/BugListing'

function App() {
  return (
    <Router>
      <Route exact path="/" component={BugListing} />
      <Route path="/dashboard" component={BugListing} />
    </Router>
  );
}

export default App;
