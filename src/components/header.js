import React from 'react'
import { Button,Navbar,Form } from 'react-bootstrap';
import './header.css'
import logo from './trabajo-en-equipo.png'

console.log(logo);

function Header(){
    return (
                <>
                <Navbar expand="sm" bg="primary" variant="light">
                    <img src={logo} alt="Logo" expand="sm"/>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Form>
                        <Button variant="warning" >Mis Juntas</Button>{' '}
                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </Button>{' '}
                    </Form>                    
                </Navbar>
                </>
            )
}

export default Header;