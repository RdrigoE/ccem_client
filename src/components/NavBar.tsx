import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink} className="text-black">
                        Home 
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs >
    )



}
