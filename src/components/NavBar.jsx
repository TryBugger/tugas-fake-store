import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const NavBar = () => {

    const { user } = useAuth();

    return (
        <>
            <Navbar sticky="top" bg="primary"  data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="/dashboard">Fake Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard" >Products</Nav.Link>
                        <Nav.Link href="/cart" >Cart</Nav.Link>
                        <Nav.Link href="/addCartProduct">Add Product</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end" >
                        <Navbar.Text>Selamat Datang, {user ? jwtDecode(user.token).user : 'Guest'}</Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;