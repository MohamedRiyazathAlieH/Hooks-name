import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

interface NavigationProps {
  activeUI: number;
  setActiveUI: React.Dispatch<React.SetStateAction<number>>;
}

const Navigation: React.FC<NavigationProps> = ({ activeUI, setActiveUI }) => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">Admin Panel</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="#"
            active={activeUI === 1}
            onClick={() => setActiveUI(1)}
          >
            Classic
          </Nav.Link>
          <Nav.Link
            href="#"
            active={activeUI === 2}
            onClick={() => setActiveUI(2)}
          >
            Modern
          </Nav.Link>
          <Nav.Link
            href="#"
            active={activeUI === 3}
            onClick={() => setActiveUI(3)}
          >
            Minimal
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
