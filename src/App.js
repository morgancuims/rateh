import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ReactBingmaps } from 'react-bingmaps';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HeaderWithRouter } from './navBar';
import title from './Title.png';
import logo from './logo.jpg';
import { InputGroup, DropdownButton, Dropdown, FormControl, FormGroup, Button } from 'react-bootstrap';
import AppData from './AppData.js';
import SpecificAdPage from './SpecificAdPage';
import FindTenant from './FindTenant'
//bing map key: ArVAogdJTqdKlO7mo9SXp1beyv6os158VaiIjB9iAag_qcaI6j1hiJct4aby0lIz
/* To add router: yarn add react-router-dom */
class MapView extends React.Component {
  render() {
    var mapStyle = {
      width: 1000,
      height: 600,
      position: 'absolute',
      bottom: '5px',
      right: '3px'
    }
    var searchStyle = {
      position: 'absolute',
      right: '4px',
      top: '250px',
      width: '60%'
    }
    var bingmapKey = this.props.bingmapKey;
    var infoboxesWithPushPins = this.props.infoboxesWithPushPins;
    return (

      <div>
        <div class='searchBar' style={searchStyle}>
          <InputGroup size='lg'>
            <FormControl
              placeholder="Search nearby"
              aria-label="Search nearby"
              aria-describedby="basic-addon2"
            />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Number of rooms"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#">3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Type"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#">House</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Price range"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#">500-1200</Dropdown.Item>
            </DropdownButton>

            <Button variant="dark">Search</Button>
          </InputGroup>

        </div>
        <div>
          <table>
            <tr>
              <th>
                <AppData mainPageSorting="default" />
              </th>
              <th>
                <div className="map-one" style={mapStyle}>
                  <ReactBingmaps
                    id="one"
                    bingmapKey={bingmapKey}
                    center={[43.2609, -79.9192]}
                    zoom={11}
                    infoboxesWithPushPins={infoboxesWithPushPins}
                  >
                  </ReactBingmaps>
                </div>
              </th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bingmapKey: "ArVAogdJTqdKlO7mo9SXp1beyv6os158VaiIjB9iAag_qcaI6j1hiJct4aby0lIz",
      infoboxesWithPushPins: [
        {
          "location": [43.2609, -79.9192],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'McMaster University', description: 'University' },
          "pushPinOption": { title: 'McMaster University', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        }
      ],
    }
  }

  testfunction() {
    alert("clicked")
  }

  render() {
    var headerStyle = {
      padding: '5px'
    }
    var logoStyle = {
      width: '50px',
      height: '50px'
    }
    var titleStyle = {
      width: '30%',
      height: '20%',
      right: '4px'
    }

    return (
      <React.Fragment>
        <div class='header' style={headerStyle}>
          <img src={logo} alt='logo' style={logoStyle} />
          <img src={title} alt='title' style={titleStyle} />
        </div>

        <Router>
          <HeaderWithRouter />
          <Switch>
            <Route exact path='/' render={(props) => <MapView {...props} bingmapKey={this.state.bingmapKey} infoboxesWithPushPins={this.state.infoboxesWithPushPins} />} />
            <Route path='/home' render={(props) => <MapView {...props} bingmapKey={this.state.bingmapKey} infoboxesWithPushPins={this.state.infoboxesWithPushPins} />} />
            <Route path='/adPage' component={SpecificAdPage} />
            <Route path='/FindTenant' component={FindTenant} />
          </Switch>
        </Router>
      </React.Fragment>

    );
  }
}

export default App;
