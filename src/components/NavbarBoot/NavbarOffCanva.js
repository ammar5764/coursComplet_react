import React, { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom"
import DropI18N from "../DropI18N/DropI18N";
import { useTranslation } from "react-i18next"

function NavbarOffCanva() {
  const [isAuth, setIsAuth] = useState(false);

  const { t } = useTranslation()

  useEffect(() => {
    if (localStorage.getItem("tokenBlog")) {
      console.log("localStorage plein je suis auth")
      setIsAuth(true)
    } else {
      console.log("je ne suis pas auth")
      setIsAuth(false)
    }
  }, []);

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="warning" expand={expand} className="mb-3">
          <Container >
            <Navbar.Brand href="/">Cours React js</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  React js
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Portfolio</Nav.Link>
                  <Nav.Link as={Link} to="/cv">Cv</Nav.Link>
                  <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                  <Nav.Link as={Link} to="/login">{t("nav.login")}</Nav.Link>
                  {
                    // isAuth &&
                    <>


                      {/* UseState */}
                      <NavDropdown title="UseState" id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                        <NavDropdown.Item as={Link} to='/PresUseState'>Presentation du hooks</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/usfObject">
                          UseState Object
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as={Link} to="/UseStateToogle"> UseState Boolean (toogle) </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseStateList"> UseState Array ( list ) </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseStateNumber">  UseState Number </NavDropdown.Item>
                      </NavDropdown>

                      {/* UseEffect */}
                      <NavDropdown title="UseEffect" id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                        <NavDropdown.Item as={Link} to="/PresUseEffect">Presentation UseEffect</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UefVide">
                          UseEffect []
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as={Link} to="/useEffectDependance">
                          UseEffect [Avec Dependance]
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseEffectReturn">
                          UseEffect Avec Nettoyage ( Return )
                        </NavDropdown.Item>

                      </NavDropdown>

                      {/* Le Style */}
                      <Nav.Link as={Link} to="/StyleReact">CSS</Nav.Link>


                      {/* API */}
                      <NavDropdown title="API" id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item as={Link} to="/AxiosGet">Axios get</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/AxiosPost">Axios post</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="">Recuperer tous les articles</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Recuperer un article par son ID</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/AddArticle">add Article</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DeleteArticle">Delete Article</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UpdateArticle">Update Article</NavDropdown.Item>
                      </NavDropdown>

                      {/* Router */}
                      <NavDropdown title="Router" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item as={Link} to="/Intro">Creer une route</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Page 404</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">route dynamique</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Link</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">UseLocation</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">UseParams</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Navigate</NavDropdown.Item>
                      </NavDropdown>

                      {/* DataTable */}
                      <NavDropdown title="DataTable" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item as={Link} to="/DataTableBasique">DataTable Basique</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableSort">DataTableSort</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">DataTable Full</NavDropdown.Item>
                      </NavDropdown>

                      {/* Hooks Avancé */}
                      <NavDropdown title="Hooks Avancé" id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                        <NavDropdown.Item as={Link} to="/DataTableFull">UseReducer</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">UseMemo</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">UseCallback</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">useMemo vs useCB</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/PresUseRef">UseRef</NavDropdown.Item>
                      </NavDropdown>

                      {/* Redux */}
                      <NavDropdown title="Redux" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item as={Link} to="/DataTableFull">Environnement</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">UseSelector</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">UseDispatch</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Form" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item as={Link} to="/HKbase">React-Hook-Form base</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="divers" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item as={Link} to="/curseur">curseur</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/buttonfleche">boutton fleché</NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link as={Link} onClick={() => {
                        localStorage.setItem("tokenBlog", "")
                        window.location.reload()
                      }} >logout</Nav.Link>

                    </>
                  }
                  <DropI18N />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  );
}

export default NavbarOffCanva;