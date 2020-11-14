import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';

export const NavBar = props =>{
    const { location } = props;
    return(
            <Navbar expand="lg" bg="dark" variant="dark" sticky='top'>
            <Navbar.Brand href="/">Rate The House</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" variant='pills' activeKey={location.pathname}>
                <Nav.Item>
                    <Nav.Link href='/home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/adPage'>adTest</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/FindTenant'>Find Tennant</Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export const HeaderWithRouter = withRouter(NavBar);