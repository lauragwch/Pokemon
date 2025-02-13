import { Card } from "react-bootstrap"

const PokemonCard = ({pokemonCard}) => {
    return <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"https://img.pokemondb.net/artwork/"+pokemonCard.name+".jpg"}/>
        <Card.Body className="d-flex flex-column justify-content-end">
            <Card.Title>{pokemonCard.name}</Card.Title>
            </Card.Body>
        </Card>
        
    
    </>

}
    export default PokemonCard