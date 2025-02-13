import PokemonService from "../Services/PokemonService";
import { useEffect, useState} from "react";
import { Container } from "react-bootstrap";


const PokemonDetails = () => {
    const [pokemons, setPokemons] = useState([])
    const fetchPokemonByName = async () => {
        try {
            const response = await PokemonService.fetchPokemonByName()
            console.log(response.data.results)
            setPokemons(response.data.results)

        } catch (error) {
            console.error(error)

        }
    }
    useEffect(() => {
        fetchPokemonByName()
    }, [])
}

return <>
   
   <Container className="d-flex flex-column align-items-center">
            <h1 style={{fontSize: '4rem' }}>Details</h1>
            <div className="d-flex justify-content-around gap-2 flex-wrap">
                {pokemon((pokemon, index) => {
                    return  <p>key={index} name={pokemon.name}</p>
                })}
            </div>
        </Container>
        
    
    </>
    

export default PokemonDetails