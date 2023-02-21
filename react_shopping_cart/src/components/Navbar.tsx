import {Button,Container,Nav, Navbar as NavbarBs} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cart from "../assets/shopping-cart.svg"
import reactLogo from "../assets/react.svg"
export function Navbar() {
    return(
        <>
        <NavbarBs style={{backgroundColor:"black",position:"sticky",top:"0"}}>
            <Container>
                <img src={reactLogo} alt="storeLogo" height="75px" style={{marginRight:"50px",}} />
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} style={{color:"whitesmoke"}}>Home</Nav.Link><Nav.Link to="/about" as={NavLink} style={{color:"whitesmoke"}}>About</Nav.Link><Nav.Link to="/store" as={NavLink} style={{color:"whitesmoke"}}>Store</Nav.Link>
                </Nav>
                <Button style={{position:"relative"}} variant="outline-primary" className="rounded-circle">
                    <img style={{width:"3rem",height:"3rem",borderRadius:"20%",position:"relative"}} src={cart} alt="button"/>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:"white",width:"1.5rem",height:"1.5rem",position:"absolute",bottom:"0",right:"0"}}>3</div>
                </Button>
            </Container>
        </NavbarBs>
        </>
    )    
}