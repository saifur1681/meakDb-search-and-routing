import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
    const { mealId } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState([])
    const { strMeal, strInstructions, strMealThumb } = details;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [])

    const clickForBack = () => {
        navigate("/home")
    }

    return (
        <div>
            <h1>This is Details</h1>
            <Card className="mx-auto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions?.slice(0, 200)}
                    </Card.Text>
                    <Button onClick={clickForBack} variant="primary">Go Back</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;