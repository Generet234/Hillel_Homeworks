import { Link } from "react-router-dom";
import { Container, Navbar, Nav} from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/users">Users List</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/users/create">Create Post</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;

