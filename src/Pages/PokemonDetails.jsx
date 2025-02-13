import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


const PokemonDetails = () => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState({})
    const fetchPokemonByName = async (name) => {
        try {
            const response = await PokemonService.fetchPokemonByName(name)
            const responseBis = await PokemonService.fetchPokemonSpeciesByName(name)
            setPokemon({...response.data, ...responseBis.data})

            setPokemon(response.data)

        } catch (error) {
            console.error(error)

        }
    }
    useEffect(() => {
        fetchPokemonByName(name)
    }, [name])


    return <>

        <Container className="d-flex flex-column align-items-center">
            <h1>{name}</h1>
            <div className="d-flex justify-content-around gap-2 flex-wrap">
                
            </div>
        </Container>


    </>

}
export default PokemonDetails