import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

const PokemonByVersion = () => {
    // Récupère le paramètre version de l'URL
    const { version } = useParams();
    // Crée un état pokemons qui est un tableau vide par défaut
    const [pokemons, setPokemons] = useState([]);

    // Crée une fonction fetchPokemonsByVersion qui va chercher les pokemons par version
    const fetchPokemonsByVersion = async () => {
        try {
            // Appelle la fonction fetchPokemonsByVersion de PokemonService
            const response = await PokemonService.fetchPokemonsByVersion(version);
            const responseBis = await PokemonService.fetchPokemonsByGroupVersion(response.data.version_group.name);
            const responseTer = await PokemonService.fetchPokemonsByGeneration(responseBis.data.generation.name);
            // Met à jour l'état pokemons avec les pokemons récupérés
            setPokemons(responseTer.data.pokemon_species);
        } catch (error) {
            console.error(error);
        }
    };

    // Utilise useEffect pour appeler fetchPokemonsByVersion une seule fois
    useEffect(() => {
        fetchPokemonsByVersion();
    }, [version]);

    
    return <Container className="d-flex flex-column align-items-center">
        <h1>{version}</h1>
        <div className="d-flex justify-content-around gap-2 flex-wrap">
            {pokemons.map((pokemon,index) => {
                return <PokemonCard key={index} pokemonCard={pokemon} />
            })}
        </div>
    </Container>;
}
 
export default PokemonByVersion;