import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Body/Home';
import About from './components/Body/About';
import Contact from './components/Body/Contact';
import NotFound from './components/Body/NotFound';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App () {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />;
          <Route exact path="/contact" component={Contact} />;

          <Route component={NotFound} />;

        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
