import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ReactBingmaps } from 'react-bingmaps';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import LocalParkingRoundedIcon from '@material-ui/icons/LocalParkingRounded';
import landlordImg from './landlord1.jpg'
import houseImage1 from "./houseImage1.jpg"
import houseImage2 from "./houseImage2.jpg"
import houseImage3 from "./houseImage3.jpg"
import utility from "./Utility.png"
import { Launcher } from 'react-chat-window'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './SpecificAdPage.css';

class specificAdPage extends React.Component {
    constructor(props) {
        super(props);

        // An array of social media posts messages, and we'll increment nextID
        // to maintain a unique ID for each post in our array
        this.state = {
            messageList: [],
            latitude: 43.2069,
            longitude: -79.9192,
            houseCategory: "Mcmaster University",
            postTitle: "3 bedroom house",
            shortDescription: "three bedroom, renovated last year",
            postID: 0,
            price: 600,
            rating: 4,
            displayImage: 0,
            review: [
                { reviewRating: 5, reviewDetail: "great house", User: "Morina" },
                { reviewRating: 4, reviewDetail: "no complians", User: "Daivd" },
                { reviewRating: 4, reviewDetail: "greate landlord", User: "Trump" },
            ],
            landlordImage: "landLordImage.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 50Gb/s",
            Parking: "2",
            reviewSorting: "Sort By"
        };
    }

    renderReviewList() {
        if (this.state.reviewSorting === "Rating") {
            return (
                <Grid item xs={8} container direction="column" justify="flex-start" alignItems="stretch">
                    { this.renderSingleReview(this.state.review[0])}
                    { this.renderSingleReview(this.state.review[1])}
                    { this.renderSingleReview(this.state.review[2])}
                </Grid >
            )
        }
        else if (this.state.reviewSorting === "User Name A-Z") {
            return (
                <Grid item xs={8} container direction="column" justify="flex-start" alignItems="stretch">
                    { this.renderSingleReview(this.state.review[1])}
                    { this.renderSingleReview(this.state.review[0])}
                    { this.renderSingleReview(this.state.review[2])}
                </Grid >
            )
        }
        else {
            return (
                <Grid item xs={8} container direction="column" justify="flex-start" alignItems="stretch">
                    { this.renderSingleReview(this.state.review[2])}
                    { this.renderSingleReview(this.state.review[1])}
                    { this.renderSingleReview(this.state.review[0])}
                </Grid >
            )
        }
    }

    renderSingleReview(givenReview) {
        return (
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            {givenReview.User}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {givenReview.reviewDetail}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1"><Rating name="read-only"
                        value={givenReview.reviewRating} readOnly /></Typography>
                </Grid>
            </Grid>
        )
    }

    renderReview() {
        return (
            <Paper>
                <Grid item xs={12} container direction="column" justify="flex-start" alignItems="stretch">
                    <Grid item container direction="row" justify="flex-start" alignItems="baseline">
                        <Grid item>
                            <Typography gutterBottom variant="subtitle1">
                                Review
                            </Typography>
                        </Grid>
                        <Grid item>
                            <DropdownButton id="dropdown-basic-button" title={this.state.reviewSorting}>
                                <Dropdown.Item href="#"
                                    onClick={() => { this.setState({ reviewSorting: "Rating" }) }}>
                                    Rating</Dropdown.Item>
                                <Dropdown.Item href="#"
                                    onClick={() => { this.setState({ reviewSorting: "User Name A-Z" }) }}>
                                    User Name A-Z</Dropdown.Item>
                                <Dropdown.Item href="#"
                                    onClick={() => { this.setState({ reviewSorting: "Default" }) }}>
                                    Default</Dropdown.Item>
                            </DropdownButton>
                        </Grid>
                    </Grid>
                    {this.renderReviewList()}
                </Grid>
            </Paper>
        )
    }
    renderOverview() {
        return (
            <div className="root_left">
                <Paper className="paper">
                    <Typography gutterBottom variant="subtitle1">
                        Overview
                    </Typography>
                    <Grid container justify="space-around" alignItems="flex-start" direction="row">
                        <Grid item xs container justify="flex-start" alignItems="center" direction="column">
                            <Grid item xs container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item>
                                    <img className="imageUtility" alt="Test" src={utility} />
                                </Grid>
                                <Grid item>Utlity</Grid>
                            </Grid>
                            <Grid item xs container direction="column" justify="space-evenly" alignItem="center">
                                {this.renderUtilityComponent(this.state.electricy, "Electricy")}
                                {this.renderUtilityComponent(this.state.water, "Water")}
                                {this.renderUtilityComponent(this.state.Heat, "Heat")}
                            </Grid>
                        </Grid>

                        <Grid item xs container justify="flex-start" alignItems="flex-start" direction="column">
                            <Grid item xs container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item>
                                    <WifiRoundedIcon fontSize="inherit"
                                        style={{ fontSize: "small" }} />
                                </Grid>
                                <Grid item>WiFi</Grid>
                            </Grid>
                            <Grid item justify="flex-start">
                                {this.state.WIFI}
                            </Grid>
                        </Grid>

                        <Grid item xs container justify="flex-start" alignItems="flex-start" direction="column">
                            <Grid item xs container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item>
                                    <LocalParkingRoundedIcon fontSize="inherit"
                                        style={{ fontSize: "small" }} />
                                </Grid>
                                <Grid item>Parking</Grid>
                            </Grid>
                            <Grid item justify="flex-start">
                                {this.state.Parking} included
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }

    renderUtilityComponent(Input, inputName) {
        if (Input) {
            return (
                <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <CheckIcon fontSize="inherit"
                            style={{ fontSize: "small" }} />
                    </Grid>
                    <Grid item>{inputName}</Grid>
                </Grid>
            )
        }
        else {
            return (
                <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <ClearIcon fontSize="inherit"
                            style={{ fontSize: "small" }} />
                    </Grid>
                    <Grid item>{Input}</Grid>
                </Grid>
            )
        }
    }

    renderHouseImage() {
        if (this.state.displayImage === 0) {
            return <img className="imageHouse" alt="Test" src={houseImage1} />
        }
        else if (this.state.displayImage === 1 || this.state.displayImage === -2) {
            return <img className="imageHouse" alt="Test" src={houseImage2} />
        }
        else {
            return <img className="imageHouse" alt="Test" src={houseImage3} />
        }
    }

    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message, {
                author: 'them',
                type: 'text',
                data: {
                    text: "The landlord is currently busy and will reply soon"
                }
            }]
        })
    }

    render() {
        return (
            <div className="parent">
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                    <Grid item xs={8}>
                        <div className="root_left">
                            <Paper className="paper">
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <img className="image" alt="Test" src={landlordImg} />
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    {this.state.postTitle}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    {this.state.shortDescription}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1"><Rating name="read-only"
                                                value={this.state.rating} readOnly /></Typography>
                                            <Typography variant="subtitle1">{this.state.rating} out of 5</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                        <div className="root_left">
                            <Grid container direction="row" justify="flex-start" alignItems="center">
                                <Grid item>
                                    <IconButton aria-label="delete" justify="center"
                                        onClick={() => { this.setState({ displayImage: (this.state.displayImage - 1) % 3 }) }}>
                                        <ArrowBackIosRoundedIcon fontSize="inherit"
                                            style={{ fontSize: "150px" }} />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton aria-label="delete" justify="center"
                                        onClick={() => { this.setState({ displayImage: (this.state.displayImage + 1) % 3 }) }}>
                                        <ArrowForwardIosRoundedIcon fontSize="inherit"
                                            style={{ fontSize: "150px" }} />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    {this.renderHouseImage()}
                                </Grid>
                            </Grid>
                        </div>
                        {this.renderOverview()}
                    </Grid>
                    <Grid item xs={4} container direction="column" justify="flex-start" alignItems="stretch">
                        <Grid item>
                            <div className="miniMap">
                                <ReactBingmaps
                                    id="two"
                                    bingmapKey="ArVAogdJTqdKlO7mo9SXp1beyv6os158VaiIjB9iAag_qcaI6j1hiJct4aby0lIz"
                                    center={[43.2609, -79.9192]}
                                    zoom={15}
                                    pushPins={[
                                        {
                                            "location": [43.2609, -79.9192], "option": { color: 'red' },
                                        }
                                    ]}
                                >
                                </ReactBingmaps>
                            </div>
                        </Grid>
                        <div className="root_right">
                            {this.renderReview()}
                        </div>
                    </Grid>
                </Grid>

                <Launcher
                    agentProfile={{
                        teamName: "To Landlord",
                        imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messageList}
                    showEmoji
                />
            </div >
        )

    }

}
export default specificAdPage