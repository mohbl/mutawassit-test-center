import React from 'react';
import { ChakraProvider, CSSReset, Box, Grid } from '@chakra-ui/core';
import { Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import theme from '@chakra-ui/theme';
import {
  CSSTransition,
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

//?pages
import Index from './pages/index';
import Books from './pages/books';
import Book from './pages/book';
import Standards from './pages/standards';
import Enthropology from './pages/enthropology';
import CultureStudies from './pages/cultureStudies';
// import Home from './pages/home';
import About from './pages/about';
// import Blog from './pages/blog';
// import Book from './pages/book';
import Events from './pages/events';
import SinglePost from './pages/singlePost';

import Navbar from './components/layout/Navbar';
// import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';
//?util
import Up from './util/Up';
import SocialButtons from './util/SocialButtons';
import ScrollToTop from './util/ScrollToTop';

import './styles/globals.css';
const TIMEOUT = 300;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `scale(0.7) translate(100px) `,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `scale(1) translate(0px)`,
  },
  exiting: {
    transition: `opacity ${600}ms ease-in-out, transform ${600}ms ease-in-out`,
    opacity: 0,
    transform: `scale(0.7) translate(-100px)`,
  },
};

function App(props) {
  const location = useLocation();
  console.log(location);
  React.useEffect(() => {
    window.addEventListener('load', (event) => {
      var image = document.querySelector('img');
      var isLoaded = image.complete && image.naturalHeight !== 0;
      alert(isLoaded);
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <SocialButtons></SocialButtons>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Switch>
        <Route title="index" exact path="/">
          <Index />
        </Route>

        <Route title="about" exact path="/about">
          <About />
        </Route>
        <Route title="standards" exact path="/standards">
          <Standards />
        </Route>
        <Route title="enthroplolgy" exact path="/enthropology">
          <Enthropology />
        </Route>
        <Route title="culture studies" exact path="/cultureStudies">
          <CultureStudies />
        </Route>
        <Route title="post" exact path="/singlePost">
          <SinglePost />
        </Route>
        {/* <Route title="blog" exact path="/blog">
          <Blog />
        </Route> */}
        {/* <Route title="single-post" exact path="/singlePost">
          <SinglePost />
        </Route> */}

        <Route title="book" exact path="/book">
          <Book />
        </Route>
        <Route title="books" exact path="/books">
          <Books />
        </Route>
        <Route title="events" exact path="/events">
          <Events />
        </Route>
      </Switch>
      <Up></Up>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
