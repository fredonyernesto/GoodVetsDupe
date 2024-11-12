import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../NB/index.css';

function NB() {
  return (
    <Navbar expand="lg" className="navbar fixed-top">
      <Container className="navbar-container">
        <Navbar.Brand href="/" className="navbar-brand">GoodVets</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          
          <Nav className="nav-links me-auto">
            <Nav.Link href="/Hospitals" className="nav-link">HOSPITALS NEAR ME</Nav.Link>
            
            <NavDropdown title="LOCATIONS" id="locations-dropdown" className="nav-dropdown locations-dropdown">
              <NavDropdown.Item href="#action/3.1" className="dropdown-item">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="dropdown-item">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="dropdown-item">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="dropdown-item">Separated link</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="SERVICES" id="services-dropdown" className="nav-dropdown services-dropdown">
              <NavDropdown.Item href="#action/3.1" className="dropdown-item">Our Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="dropdown-item">Primary Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="dropdown-item">Urgent Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="dropdown-item">Surgery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className="dropdown-item">Oral Health</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" className="dropdown-item">Virtual Care</NavDropdown.Item>
              
            </NavDropdown>
            
            <Nav.Link href="/Wellness" className="nav-link">WELLNESS PLANS</Nav.Link>
            
            <NavDropdown title="JOIN US" id="join-dropdown" className="nav-dropdown join-dropdown">
              <NavDropdown.Item href="#action/3.1" className="dropdown-item">Partner with Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="dropdown-item">Join our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="dropdown-item">GoodVets Flourish Porgam</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="dropdown-item">Chicago Relocation Program</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className="dropdown-item">Associate Vets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" className="dropdown-item">New Grads</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7" className="dropdown-item">Technicians & Staff</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8" className="dropdown-item">Careers</NavDropdown.Item>
            </NavDropdown>
            
            <Button variant="outline-dark" href="/Portal" className="nav-button pet-portal-button">PET PORTAL</Button>
            <Button variant="outline-dark" href="/Book" className="nav-button book-now-button">BOOK NOW</Button>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NB;
