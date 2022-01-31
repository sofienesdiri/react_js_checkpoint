 import { Nav,Navbar,Container } from "react-bootstrap"
 const NavBarBlack=()=>{
    return(
      <div>
        
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Sofiene</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        </div>
    )
  }

  export default NavBarBlack