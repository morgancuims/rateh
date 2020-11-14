import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Emma from './I_EmmaAdson.jpg'
import Susan from './I_SusanMiller.jpg'
import John from './I_JohnEbron.jpg'
import Williams from './I_WilliamsMiller.jpg'
import Sophia from './I_SophiaLan.jpg'
import Jeff from './I_JeffBullard.jpg'
import { InputGroup, DropdownButton, Dropdown, FormControl, Button } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';


class renderTennant extends React.Component {
    constructor(props) {
        super(props);

        // An array of social media posts messages, and we'll increment nextID
        // to maintain a unique ID for each post in our array
        this.state = {
            infoID: [{
                name: "Emma Adson",
                rent: "$500-$1000",
                perferRegion: "Any",
                extraInfo: "Look for short term"
            },
            {
                name: "Susan Miller",
                rent: "$750-$1250",
                perferRegion: "Westdale",
                extraInfo: "Have a Dog"
            },
            {
                name: "John Ebron",
                rent: "$750-$1250",
                perferRegion: "Any",
                extraInfo: "None"
            },
            {
                name: "Williams Miller",
                rent: "$500-$1000",
                perferRegion: "Downtown",
                extraInfo: "Final Year"
            },
            {
                name: "Sophia Lan",
                rent: "$500-$750",
                perferRegion: "any",
                extraInfo: "None"
            },
            {
                name: "Jeff Bullard",
                rent: "$500-$1500",
                perferRegion: "any",
                extraInfo: "None"
            },
            ],
        };
    }
    renderSingleTennant(image, infoID) {
        return (
            <Grid item container direction="column" justify="flex-start" alignItems="stretch">
                <Grid item>
                    <img className="Tennant" alt={this.state.infoID[infoID].name} src={image} />
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                        Name: {this.state.infoID[infoID].name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                        Rent Exception: {this.state.infoID[infoID].rent}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                        Region Preference: {this.state.infoID[infoID].perferRegion}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                        Additional Info: {this.state.infoID[infoID].extraInfo}
                    </Typography>
                </Grid>
                <Grid item container direction="row" justify="space-between" alignItems="flex-start">
                    <Grid item>
                        <Button >
                            <ExitToAppRoundedIcon fontSize="inherit"
                                style={{ fontSize: "default" }} />
                        To Profile
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button >
                            <ChatIcon fontSize="inherit"
                                style={{ fontSize: "default" }} />
                        Take a Talk
                    </Button>
                    </Grid>
                </Grid>

            </Grid>
        )
    }

    renderTennants() {
        if (this.props.match.params.filterMethod === "Male") {
            if (this.props.match.params.sortMethod === "Name") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Jeff, 5)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(John, 2)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Williams, 3)}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Price L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Williams, 3)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(John, 2)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Jeff, 5)}
                        </Grid>
                    </Grid>
                </Grid >)
            }
            else if (this.props.match.params.sortMethod === "Price H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Jeff, 5)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(John, 2)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Williams, 3)}
                        </Grid>
                    </Grid>
                </Grid >)
            }
            else {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(John, 2)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Williams, 3)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Jeff, 5)}
                        </Grid>
                    </Grid>
                </Grid >)
            }
        }
        else if (this.props.match.params.filterMethod === "Female") {
            if (this.props.match.params.sortMethod === "Name") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Emma, 0)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Sophia, 4)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Susan, 1)}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Price L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Sophia, 4)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Emma, 0)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Susan, 1)}
                        </Grid>
                    </Grid>
                </Grid >)
            }
            else if (this.props.match.params.sortMethod === "Price H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Susan, 1)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Emma, 0)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Sophia, 4)}
                        </Grid>
                    </Grid>
                </Grid >)
            }
            else {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Emma, 0)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Susan, 1)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Sophia, 4)}
                        </Grid>
                    </Grid>
                </Grid >)
            }
        }
        else {
            return (
                <Grid container xs={12} direction="column" justify="flex-start" alignItems="center">
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Emma, 0)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Susan, 1)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(John, 2)}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderSingleTennant(Williams, 3)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Sophia, 4)}
                        </Grid>
                        <Grid item>
                            {this.renderSingleTennant(Jeff, 5)}
                        </Grid>
                    </Grid>
                </Grid>
            )
        }

    }

    render() {
        return (
            <div>
                {this.renderTennants()}
            </div>
        )
    }
}
class FindTenant extends React.Component {
    constructor(props) {
        super(props);

        // An array of social media posts messages, and we'll increment nextID
        // to maintain a unique ID for each post in our array
        this.state = {
            sortingOrder: "Sort By...",
            filterOrder: "Filter By..."
        };
    }

    routeChange = () => {
        return (
            <Redirect
                to={'/FindTenant/hahah/Male'}
            />
        )
    }

    render() {
        return (
            <div>
                <div class='searchBar' >
                    <InputGroup size='lg'>
                        <FormControl
                            placeholder="Search Tennant"
                            aria-label="Search Tennant"
                            aria-describedby="basic-addon2"
                        />
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title={this.state.sortingOrder}
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item href="#"
                                onClick={() => { this.setState({ sortingOrder: "Name" }) }}
                            >Name</Dropdown.Item>
                            <Dropdown.Item href="#"
                                onClick={() => { this.setState({ sortingOrder: "Price L-H" }) }}>
                                Price Range: Low to High</Dropdown.Item>
                            <Dropdown.Item href="#"
                                onClick={() => { this.setState({ sortingOrder: "Price H-L" }) }}>
                                Price Range: High to Low</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title={this.state.filterOrder}
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item href="#"
                                onClick={() => { this.setState({ filterOrder: "Male" }) }}>
                                Male</Dropdown.Item>
                            <Dropdown.Item href="#"
                                onClick={() => { this.setState({ filterOrder: "Female" }) }}>
                                Female</Dropdown.Item>
                        </DropdownButton>
                        <Button variant="dark " href={'/FindTenant/' + this.state.sortingOrder + '/' + this.state.filterOrder}>Search</Button>
                    </InputGroup>
                    <div>
                        <Route exact path='/FindTenant' component={renderTennant} />
                        <Route path='/FindTenant/:sortMethod/:filterMethod' component={renderTennant} />
                    </div>

                </div>
            </div>
        )
    }
}

export default FindTenant