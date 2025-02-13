import { useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
const navigate = useNavigate()

    return <>
        <Navbar bg='black' variant='dark' expand='lg'>

            <Container>
                <Navbar.Brand onClick={() => {navigate('/')}} >Pokedex</Navbar.Brand>
            </Container>

        </Navbar>
    </>
}
export default NavBar;