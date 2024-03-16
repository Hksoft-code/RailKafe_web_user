import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import RailkafeLogo from "../Assets/railkafelogo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary unhide">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand to="/home">
            <img src={RailkafeLogo} />
          </Navbar.Brand>
          <a style={{ textDecoration: "none" }} href="tel:+919771231434">
            {" "}
            <FaPhoneAlt className="text-2xl text-gray-500" />
          </a>
        </Container>
        <Navbar.Collapse className=" justify-content-end" id="basic-navbar-nav">
          <Nav className="gap-1 justify-content-start">
            <Button variant="white">
              <h3 className="h3main " onClick={() => navigate("/")}>
                Home
              </h3>
            </Button>
            <Button variant="white">
              <h3
                className="h3main "
                onClick={() => navigate("/about-railkafe")}
              >
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
              <h3
                className="h3main "
                onClick={() => navigate("/book-group-order")}
              >
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
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary hide">
        <Container>
          <Navbar.Brand to="/home">
            <img src={RailkafeLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className=" justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="gap-1 ">
              <Button variant="white">
                <h3 className="h3main " onClick={() => navigate("/")}>
                  Home
                </h3>
              </Button>
              <Button variant="white">
                <h3
                  className="h3main "
                  onClick={() => navigate("/about-railkafe")}
                >
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
                <h3
                  className="h3main "
                  onClick={() => navigate("/book-group-order")}
                >
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
    </>
  );
}

export default Header;
