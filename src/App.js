import React, { Fragment } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Jumbotron'
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './components/Profile/Profile';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Fragment>
      <div>
        <Navigation />
        <Main />
        <Profile />
        <Portfolio />
        <Contact />
        <Footer />
      </div>

    </Fragment>
  );
}

export default App;
