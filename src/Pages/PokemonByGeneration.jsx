import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

const PokemonByGeneration = () => {
    // Récupère le paramètre generation de l'URL
    const { generation } = useParams();
    // Crée un état pokemons qui est un tableau vide par défaut
    const [pokemons, setPokemons] = useState([]);

    // Crée une fonction fetchPokemonsByGeneration qui va chercher les pokemons par generation
    const fetchPokemonsByGeneration = async () => {
        try {
            // Appelle la fonction fetchPokemonsByGeneration de PokemonService
            const response = await PokemonService.fetchPokemonsByGeneration(generation);
            // Met à jour l'état pokemons avec les pokemons récupérés
            setPokemons(response.data.pokemon_species);
        } catch (error) {
            console.error(error);
        }
    };

    // Utilise useEffect pour appeler fetchPokemonsByType une seule fois
    useEffect(() => {
        fetchPokemonsByGeneration();
    }, [generation]);

    
    return <Container className="d-flex flex-column align-items-center">
        <h1>{generation}</h1>
        <div className="d-flex justify-content-around gap-2 flex-wrap">
            {pokemons.map((pokemon,index) => {
                return <PokemonCard key={index} pokemonCard={pokemon} />
            })}
        </div>
    </Container>;
}
 
export default PokemonByGeneration;