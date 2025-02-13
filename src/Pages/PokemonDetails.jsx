import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TypeService from "../Services/TypeService";


const PokemonDetails = () => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState({})
    const fetchPokemonByName = async (name) => {
        try {
            const response = await PokemonService.fetchPokemonByName(name)
            const responseBis = await PokemonService.fetchPokemonSpeciesByName(name)
            const responseTer = await TypeService.fetchTypesByName(response.data.types[0].type.name)
            console.log({ ...response.data, ...responseBis.data })
            setPokemon({ ...responseTer.data, ...response.data, ...responseBis.data })

        } catch (error) {
            console.error(error)

        }
    }
    useEffect(() => {
        fetchPokemonByName(name)
    }, [name])


    return <>

        <Container className="d-flex flex-column align-items-center">

            {/*Afficher le nom du pokemon en francais*/}
            <h1>{pokemon.names && pokemon.names[4].name}</h1>

            {/*Je cree une div qui va contenir les 2 autres div*/}
            <div className="d-flex col-12 gap-2">

                {/*Je cree une div qui va contenir l'image et les stats*/}
                <div id='gauche' className="col-5 d-flex flex-column align-items-center">

                    {/*Afficher l'image du pokemon*/}
                    <div id='img'>
                        <img src={"https://img.pokemondb.net/artwork/" + name + ".jpg"} alt="{pokemon.name}" />
                    </div>

                    {/*Afficher les stats du pokemon*/}
                    <div>STATS</div>
                </div>


                {/*Je cree une div qui va contenir les autres infos*/}
                <div id='droite' className="col-5 d-flex flex-column align-items-center">

                    {/*Si pokemon.flavor_text_entries existe alors j'affiche pokemon.flavor_text_entries[16].flavor_text*/}
                    <p id='description'> {pokemon.flavor_text_entries && pokemon.flavor_text_entries[16].flavor_text}</p>
                    <div id='games' className="d-flex gap-1 flex-wrap">
                        {pokemon.game_indices && pokemon.game_indices.map((game, index) => {
                            return <button className={game.version.name + " button"} key={index}>{game.version.name}</button>
                        })}
                    </div>

                    <div id='global-info' className="d-flex col-12 justify-content-between bg-primary mt-3 gap-2">
                        <div id='infos' className="d-flex flex-column col-5">
                            <h3>Taille:</h3>
                            <p>{pokemon.height}</p>
                            <h3>Poids:</h3>
                            <p>{pokemon.weight}</p>
                        </div>

                        <div className="col-5 d-flex flex-column align-items-center gap-2">
                            <h3>Compétences</h3>
                            {pokemon.abilities && pokemon.abilities.map((ability, index) => {
                                return <button className="button" key={index}>{ability.ability.name}</button>
                            })}
                        </div>
                    </div>

                    <div id="types" className="d-flex flex-column col-12 mt-3">
                        <h3>Types</h3>
                        <div className="d-flex flex-wrap gap-2">
                            {pokemon.types && pokemon.types.map((type, index) => {
                                return <button className={type.type.name + " button"} key={index}>{type.type.name}</button>
                            })}
                        </div>
                    </div>

                    <div id="faiblesses" className="d-flex flex-column col-12 mt-3">
                        <h3>Double dommages contre</h3>
                        <div className="d-flex flex-wrap gap-2">
                            {pokemon.damage_relations && pokemon.damage_relations.double_damage_from.map((type, index) => {
                                return <button className={type.name + " button"} key={index}>{type.name}</button>
                            })}
                        </div>
                    </div>

                    <div id="points-forts" className="d-flex flex-column col-12 mt-3">
                        <h3>Double dommages contre</h3>
                        <div className="d-flex flex-wrap gap-2">
                            {pokemon.damage_relations && pokemon.damage_relations.double_damage_to.map((type, index) => {
                                return <button className={type.name + " button"} key={index}>{type.name}</button>
                            })}
                        </div>
                    </div>



                </div>

            </div>
        </Container>


    </>

}
export default PokemonDetails