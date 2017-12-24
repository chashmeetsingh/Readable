import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

class NavigationBar extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to='#'><a>Readable</a></LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href='/'>Posts</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href='https://github.com/chashmeetsingh/Readable'>Github Link</NavItem>
        </Nav>
      </Navbar>
    );
  };
}

export default NavigationBar;
