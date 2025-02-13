import { use, useEffect, useState } from "react"
import PokemonService from "../Services/PokemonService"
import PokemonCard from "../Components/PokemonCard"
import { Container } from "react-bootstrap"


const HomePage = () => {
    const [pokemons, setPokemons] = useState([])

    const fetchPokemon = async () => {
        try {
            const response = await PokemonService.fetchPokemons()
            setPokemons(response.data.results)

        } catch (error) {
            console.error(error)

        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])




    return <>
        <Container className="d-flex flex-column align-items-center">
            <h1 style={{fontSize: '4rem' }}>Home Page</h1>
            <div className="d-flex justify-content-around gap-2 flex-wrap">
                {pokemons.map((pokemon, index) => {
                    return <PokemonCard key={index} pokemonCard={pokemon} />
                })}
            </div>
        </Container>


    </>
}

export default HomePage