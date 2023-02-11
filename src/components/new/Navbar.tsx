import { Fab } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import AddIcon from "@mui/icons-material/Add";
import * as S from "../../styled";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="Main">Main</Nav.Link>
                  <Nav.Link href="AllBox">All</Nav.Link>
                  <Nav.Link href="WorkBox">Work</Nav.Link>
                  <Nav.Link href="MusicBox">Music</Nav.Link>
                  <Nav.Link href="TravelBox">Travel</Nav.Link>
                  <Nav.Link href="StudyBox">Study</Nav.Link>
                  <Nav.Link href="HomeBox">Home</Nav.Link>
                  <Nav.Link href="AddingPage">Adding Page</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <S.ButtonBox>
        <Fab color="default" aria-label="add">
          <Link to="/AddingPage"><AddIcon /></Link>
        </Fab>
      </S.ButtonBox>
    </>
  );
}

export default OffcanvasExample;
