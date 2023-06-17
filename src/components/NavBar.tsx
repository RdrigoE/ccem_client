import Link from "@mui/material/Link/Link"
import Toolbar from "@mui/material/Toolbar/Toolbar"
import React from "react"

export default function Navbar() {
    return (
        // <NavbarBs className="bg-white shadow-sm mb-3">
        //     <Container>
        //         <Nav>
        //             <Nav.Link to="/" as={NavLink} className="text-black">
        //                 Home 
        //             </Nav.Link>
        //         </Nav>
        //     </Container>
        // </NavbarBs >
        //
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Link
                    color="inherit"
                    noWrap
                    variant="body2"
                    href="/"
                    sx={{ p: 1, flexShrink: 0 }}
                >Home </Link>
            </Toolbar >

        </React.Fragment>

    )



}
