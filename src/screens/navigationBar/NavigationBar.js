import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navigation.css';
import { NavigationLinks } from '../../helpers/NavigationLinks'

function createLinks() {
    return NavigationLinks.map((e, index) => (
        <Nav.Link key={index} href={e.ref}>{e.name}</Nav.Link>
    )
    )
}

function NavigationBar() {
    return (
        <div id='home'>
            <Navbar className='navigation-container' expand="md">
            <Navbar.Brand styel={{ marginLeft: '1rem' }} href="#home">Karen Peazzoni</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none'}}>
                <Nav className="links" style={{margin: '0 1 rem'}}>
                    {createLinks()}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
