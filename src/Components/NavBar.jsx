import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TypeService from "../Services/TypeService";
import GenerationService from "../Services/GenerationService";
import VersionService from "../Services/VersionService";

const NavBar = () => {
const navigate = useNavigate()
const [types, setTypes] = useState([])
const [generations, setGenerations] = useState([])
const [versions, setVersions] = useState([])

const fetchTypes = async () => {
    try {
        const response = await TypeService.fetchTypes()
        setTypes(response.data.results)
    } catch (error) {
        console.error(error)
    }
}

const fetchGenerations = async () => {
    try {
        const response = await GenerationService.fetchGenerations()
        setGenerations(response.data.results)
    } catch (error) {
        console.error(error)
    }
}

const fetchVersions = async () => {
    try {
        const response = await VersionService.fetchVersions()
        setVersions(response.data.results)
    } catch (error) {
        console.error(error)
    }
}

useEffect(() => {
    fetchTypes()
    fetchGenerations()
    fetchVersions()
}, [])


    return <>
        <Navbar bg='black' variant='dark' expand='lg'>

            <Container>
                <Navbar.Brand onClick={() => {navigate('/')}} >Pokedex</Navbar.Brand>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>

                <NavDropdown title='Types' id='basic-nav-dropdown'>
                    {types.map((type, index) => {
                        return <NavDropdown.Item className='item' key={index} onClick={() => {navigate('/type/'+type.name)}}>{type.name}</NavDropdown.Item>
                    })}
                </NavDropdown>

                <NavDropdown title='Generations' id='basic-nav-dropdown'>
                    {generations.map((generation, index) => {
                        return <NavDropdown.Item className='item' key={index} onClick={() => {navigate('/generation/'+generation.name)}}>{generation.name}</NavDropdown.Item>
                    })}
                </NavDropdown>

                <NavDropdown title='Versions' id='basic-nav-dropdown'>
                    {versions.map((version, index) => {
                        return <NavDropdown.Item className='item' key={index} onClick={() => {navigate('/version/'+version.name)}}>{version.name}</NavDropdown.Item>
                    })}
                </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    </>
}
export default NavBar;