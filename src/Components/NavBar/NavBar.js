import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import { Offcanvas } from 'bootstrap';


function NavBar(){
    return(
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home"><p className="nome">Pedro Lucas</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
            <Offcanvas.Body>
            <ButtonGroup aria-label="Basic example">
              <Button href="#" variant="secondary mb-1">Currículo</Button>
              <Button href="#" variant="secondary mb-1">Projetos</Button>
              <Button href="#" variant="secondary mb-1">Contato</Button>
          </ButtonGroup>
          </Offcanvas.Body>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
}

export default NavBar;