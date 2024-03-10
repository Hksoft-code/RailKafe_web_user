import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import RailkafeLogo from "../Assets/railkafelogo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={RailkafeLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=" justify-content-end" id="basic-navbar-nav">
          <Nav className="gap-1 ">
            <Button variant="white">
              <h3 className="h3main " onClick={() => navigate("/")}>
                Home
              </h3>
            </Button>
            <Button variant="white">
              <h3 className="h3main " onClick={() => navigate("/about-railkafe")}>
                About
              </h3>
            </Button>
            <Button variant="white">
              <h3 className="h3main " onClick={() => navigate("/contactus")}>
                Contact Us
              </h3>
            </Button>
            <Button variant="white">
              <h3 className="h3main " onClick={() => navigate("/offer")}>
                Offers
              </h3>
            </Button>
            <Button variant="white">
              <h3 className="h3main " onClick={() => navigate("/")}>
                Location
              </h3>
            </Button>
            <Button variant="white">
              <h3 className="h3main " onClick={() => navigate("/book-group-order")}>
                Group Order
              </h3>
            </Button>
            <Button variant="white">
              <h3 className="h3main " onClick={() => navigate("/login")}>
                Login
              </h3>
            </Button>
            {/* <Button variant="success" style={{ backgroundColor: "#005B08C7" }}><div className='d-flex'><h3>Whatsapp</h3><img src={whatsapplogo} /></div></Button>{' '} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
