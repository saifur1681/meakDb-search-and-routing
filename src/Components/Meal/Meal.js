import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
    const navigate = useNavigate();

    const clicked = () => {
        navigate(`/details/${idMeal}`)
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 200)}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/details/${idMeal}`} >Details</Link>
                    <br />
                    <button onClick={clicked} >Details</button>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;