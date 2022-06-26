import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import About  from './pages/AboutUs';
// import Detail from './pages/detailed';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About}/>
        
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
