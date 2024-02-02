// import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import route from "./../../routes/route.json";

const AppHeader = () => {
  return (
    <>
      {/* <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={route.RESUME}>Resume</Nav.Link>
            <Nav.Link href={route.PROJECTS}>Projects</Nav.Link>
            <Nav.Link href={route.CONTACT}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="logo me-auto me-lg-0">
            <Link to={route.HOME}>Pallavi</Link>
          </h1>
          {/* <Link to={route.HOME} className="logo"></Link>
          <img src="assets/img/logo.png" alt="" className="img-fluid" /> */}
          <nav id="navbar" className="navbar order-last order-lg-0 ">
            <ul>
              <li>
                <Link className="active" to={route.HOME}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={route.ABOUT}>About</Link>
                {/* <a href={route.ABOUT}>About</a> */}
              </li>
              <li>
                <Link to={route.RESUME}>Resume</Link>
              </li>
              <li>
                <Link to={route.PROJECTS}>Projects</Link>
              </li>
              <li>
                <Link to={route.CONTACT}>Contact</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <div className="header-social-links">
            <a href="https://github.com/Pallavi-Wankhade" className="github">
              <i className="bi bi-github"></i>
            </a>
            {/* <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a> */}
            <a
              href="https://www.linkedin.com/in/pallavi-wankhade"
              className="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
export default AppHeader;
