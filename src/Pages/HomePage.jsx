import { use, useEffect, useState } from "react"
import PokemonService from "../Services/PokemonService"
import PokemonCard from "../Components/PokemonCard"
import { Container, Form } from "react-bootstrap"


const HomePage = () => {
    const [pokemons, setPokemons] = useState([])
    const [filteredPokemons, setFilteredPokemons] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const fetchPokemon = async () => {
        try {
            const response = await PokemonService.fetchPokemons()
            setPokemons(response.data.results)
            setFilteredPokemons(response.data.results)

        } catch (error) {
            console.error(error)

        }
    }

const handleChange = (event) => {
    setSearchValue(event.target.value)
}

    useEffect(() => {
        fetchPokemon()
    }, [])

    useEffect(() => {
        const filteredPokemons = pokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        setFilteredPokemons(filteredPokemons)
    }, [searchValue])




    return <>
        <Container className="d-flex flex-column align-items-center">

            <h1 style={{fontSize: '4rem' }}>POKEMONS</h1>

            <Form className="col-10 m-2 mb-5">
                <Form.Control type="text" placeholder="Search Pokemon" value={searchValue} onChange={handleChange}/>
                </Form>

            <div className="d-flex justify-content-around gap-2 flex-wrap">
                {filteredPokemons.map((pokemon, index) => {
                    return <PokemonCard key={index} pokemonCard={pokemon} />
                })}
            </div>

        </Container>


    </>
}

export default HomePage