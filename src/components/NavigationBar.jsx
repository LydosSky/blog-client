import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>Blogs</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
