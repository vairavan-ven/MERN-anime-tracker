import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Auth from '../utils/auth';

const AppNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          AniTrack
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
          <Nav className='ml-auto d-flex'>
            <Nav.Link as={Link} to='/'>
              Search For Anime
            </Nav.Link>
            {/* if user is logged in show saved anime and logout */}
            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to='/saved'>
                  See Your Anime
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to='/signup'>
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
