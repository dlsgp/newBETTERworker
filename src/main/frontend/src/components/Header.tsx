import React from 'react';
import '../styles/header.css'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { AccountCircleOutlined, LogoutOutlined } from '@mui/icons-material';

const Header: React.FC = () => {

    return(
            <Navbar expand="lg" className="header-custom">
              <Container>
                <Navbar.Brand href="/">BETTERworker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link href="/staff">직원관리</Nav.Link>
                    <Nav.Link href="/commute">출퇴근관리</Nav.Link>
                    <Nav.Link href="/pay">급여정산</Nav.Link>
                    <Nav.Link href="/schedule">스케줄관리</Nav.Link>
                    <Nav.Link href="/QR">QR코드</Nav.Link>
                  </Nav>
                  <Nav className="icon-nav">
                    <Nav.Link href="#link"><AccountCircleOutlined /></Nav.Link>
                    <Nav.Link href="#link"><LogoutOutlined /></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    );

}

export default Header;