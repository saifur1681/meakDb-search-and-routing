
import React, { useEffect, useState } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';


const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchValue])

    const handleClicked = (e) => {
        const inputTextValue = e.target.value;
        setSearchValue(inputTextValue);
    }
    return (
        <div>
            <InputGroup className="mb-3 w-50 mx-auto mt-3">
                <FormControl onChange={handleClicked}
                    placeholder="Search Your Food"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>

            <div>
                <Row xs={3} md={3} className="g-4">
                    {

                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                        />)

                    }
                </Row>
            </div>

        </div >


    );
};

export default Home;