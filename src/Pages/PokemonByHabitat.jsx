import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

const PokemonByHabitat = () => {
    // Récupère le paramètre habitat de l'URL
    const { habitat } = useParams();
    // Crée un état pokemons qui est un tableau vide par défaut
    const [pokemons, setPokemons] = useState([]);

    // Crée une fonction fetchPokemonsByHabitat qui va chercher les pokemons par habitat
    const fetchPokemonsByHabitat = async () => {
        try {
            // Appelle la fonction fetchPokemonsByHabitat de PokemonService
            const response = await PokemonService.fetchPokemonsByHabitat(habitat);
            // Met à jour l'état pokemons avec les pokemons récupérés
            setPokemons(response.data.pokemon_species);
        } catch (error) {
            console.error(error);
        }
    };

    // Utilise useEffect pour appeler fetchPokemonsByHabitat une seule fois
    useEffect(() => {
        fetchPokemonsByHabitat();
    }, [habitat]);

    
    return <Container className="d-flex flex-column align-items-center">
        <h1>{habitat}</h1>
        <div className="d-flex justify-content-around gap-2 flex-wrap">
            {pokemons.map((pokemon,index) => {
                return <PokemonCard key={index} pokemonCard={pokemon} />
            })}
        </div>
    </Container>;
}
 
export default PokemonByHabitat;