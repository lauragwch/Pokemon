import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const PokemonCard = ({pokemonCard}) => {
    const navigate = useNavigate()
    return <>
    <Card style={{ width: '18rem' }}>
        
        <Card.Img variant="top" src={"https://img.pokemondb.net/artwork/"+pokemonCard.name+".jpg"}
        onClick={()=> {navigate("/pokemon/"+pokemonCard.name)}}/>

        <Card.Body className="d-flex flex-column justify-content-end">
            <Card.Title>{pokemonCard.name}</Card.Title>
            </Card.Body>

        </Card>
        
    
    </>

}
    export default PokemonCard