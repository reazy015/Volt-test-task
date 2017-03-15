import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

export default () => {
	return(
		<Navbar>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to="/">Invoice App</Link>
				</Navbar.Brand>
			</Navbar.Header>
			<Nav>
				<LinkContainer to="/invoice">
          <NavItem>Invoices</NavItem>
        </LinkContainer>
				<LinkContainer to="/products">
					<NavItem>Products</NavItem>
				</LinkContainer>
				<LinkContainer to="/customers">
					<NavItem>Customers</NavItem>
				</LinkContainer>
			</Nav>
		</Navbar>
	)
}
