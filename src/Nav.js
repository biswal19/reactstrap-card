import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><b>3M</b>Innovation</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/components/">Innovation Stories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Technology</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Correct with 3M</NavLink>
            </NavItem>
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;