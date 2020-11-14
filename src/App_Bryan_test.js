import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import AppData from './AppData.js';

class Home extends React.Component {
  render() {
    return (
      <div >
        <h2 style={{ textAlign: 'center' }}>This is the Home page</h2><br /><br />
        <h2 style={{ textAlign: 'center' }}>LiveFeed Guide</h2>
        <p style={{ textAlign: 'center' }}>LiveFeed page contains the posts sent by the server.<br />
        On the top, there 8 checkboxs. If the checkbox is unclicked, the coorsponding posts will be filtered out</p><br /><br />
        <h2 style={{ textAlign: 'center' }}>Analytics Guide</h2>
        <p style={{ textAlign: 'center' }}>Analytics page counts the number of posts based on their problems and priorities<br />
        This page is just for viewing information, there should be no operation availiable</p>
      </div>
    );
  }
};

class specificAdd extends React.Component {
  renderSingleItem(renderItem) {
    var givenItem = renderItem
    return (
      < div id="postContainer">
        <div id="postImage">
          {/* <img src={requiredAd.imageList[0]} /> */}
          <p> {givenItem.imageList[0]} </p>
        </div>
        <div id="postPrice">{givenItem.price}</div>
        <div id="postRating">{givenItem.rating}</div>
        <div id="postTitle">{givenItem.postTitle}</div>
        <div id="postContent">{givenItem.shortDescription}</div>
      </div >
    )

  }
  render() {
    //var received = AppData.getHousePost()

    return (
      <AppData />
    );
  }
};
class findTenant extends React.Component {
  render() {
    return (
      <div >
        <h2 style={{ textAlign: 'center' }}>This is the Home page</h2><br /><br />
        <h2 style={{ textAlign: 'center' }}>LiveFeed Guide</h2>
        <p style={{ textAlign: 'center' }}>LiveFeed page contains the posts sent by the server.<br />
        On the top, there 8 checkboxs. If the checkbox is unclicked, the coorsponding posts will be filtered out</p><br /><br />
        <h2 style={{ textAlign: 'center' }}>Analytics Guide</h2>
        <p style={{ textAlign: 'center' }}>Analytics page counts the number of posts based on their problems and priorities<br />
        This page is just for viewing information, there should be no operation availiable</p>
      </div>
    );
  }
};

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/init" />
      </Route>
      <div>
        <Navbar className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><NavLink className="nav-link" exact to="/init">init</NavLink></li>
            <li><NavLink className="nav-link" exact to="/specificAdd">specificAdd</NavLink></li>
            <li><NavLink className="nav-link" exact to="/findTenant">findTenant</NavLink></li>
          </ul>
        </Navbar>



        <Route path="/init" component={Home} />
        <Route path="/specificAdd" render={(props) => <AppData mainPageSorting="threeBedroom" {...props} />} />
        <Route path="/findTenant" component={findTenant} />
        {findTenant}
      </div>
    </Router>
  );
}

export default App;
