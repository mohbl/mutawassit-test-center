import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';

//?pages
import Index from './pages/index';
import Questions from './pages/footer/questions';
import BuyRights from './pages/footer/buyrights';
import BuyBooks from './pages/footer/buybooks';
import Dist from './pages/footer/dist';
import Policy from './pages/footer/policy';
import TransAprovals from './pages/footer/transaprovals';
import Workwithus from './pages/footer/workwithus';
import Contact from './pages/footer/contact';
import ContactAuth from './pages/footer/contactauth';
import Terms from './pages/footer/terms';
import Four from './pages/404';
// import Books from './pages/books';
import BooksByCategory from './pages/booksByCategory';
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
import Author from './pages/ourWriters/Author';

import Navbar from './components/layout/Navbar';
import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';
//?util
import Up from './util/Up';
import SocialButtons from './util/SocialButtons';
import ScrollToTop from './util/ScrollToTop';
import theme from './util/theme';

import './styles/globals.css';

function App(props) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <SocialButtons></SocialButtons>
      <ScrollToTop></ScrollToTop>
      <TopNavbar></TopNavbar>
      <Navbar></Navbar>
      <Switch>
        <Route title="index" exact path="/">
          <Index />
        </Route>
        <Route title="policy" exact path="/policy">
          <Policy />
        </Route>
        <Route title="buyrights" exact path="/buyrights">
          <BuyRights />
        </Route>
        <Route title="buybooks" exact path="/buybooks">
          <BuyBooks />
        </Route>
        <Route title="dist" exact path="/dist">
          <Dist />
        </Route>
        <Route title="transaprovals" exact path="/transaprovals">
          <TransAprovals />
        </Route>
        <Route title="Terms" exact path="/terms">
          <Terms />
        </Route>
        <Route title="questions" exact path="/questions">
          <Questions />
        </Route>
        <Route title="contact" exact path="/contact">
          <Contact />
        </Route>
        <Route title="contact" exact path="/contactauth">
          <ContactAuth />
        </Route>
        <Route title="workwithus" exact path="/workwithus">
          <Workwithus />
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

        <Route title="book" exact path="/book/:id">
          <Book />
        </Route>
        <Route title="books" exact path="/books">
          <BooksByCategory />
        </Route>
        <Route title="author" exact path="/author/:id">
          <Author />
        </Route>
        {/* <Route title="books" exact path="/books">
          <Books />
        </Route> */}
        <Route title="events" exact path="/events">
          <Events />
        </Route>
        <Route title="404">
          <Four />
        </Route>
      </Switch>
      <Up></Up>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
