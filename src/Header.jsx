/**
 * geoplumber R package code.
 */
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { createBrowserHistory } from 'history'
import About from './About';
const history = createBrowserHistory()

const navs = [
  {
    key: 1,
    to: "about",
    title: "About"
  },
];

function Header(props) {
  const { switchComponent } = props;
  return (
    <Navbar inverse={true} collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <i 
            onClick={() => {
              history.push("")
              typeof switchComponent === 'function' 
              && switchComponent(null)
            }}
            style={{ 
              cursor: 'pointer',
              fontSize: '1.2em' }} 
              className="fa fa-home"></i>
          
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          {
            navs.map((item, i) => {
              return (
                <NavItem
                  key={i}
                  eventKey={item.key}
                  onClick={() => { 
                    history.push(item.to)
                    typeof switchComponent === 'function' 
                    && switchComponent(<About />)
                    }}>
                  {item.title}
                </NavItem>
              )
            })
          }
        </Nav>
        <Nav pullRight>
          <NavItem href="https://github.com/saferactive">
            <i style={{ fontSize: '1.5em' }} className="fa fa-github"></i>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

// thanks to https://stackoverflow.com/a/42124328/2332101
export default Header;
