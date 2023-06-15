import React, { useEffect, useState } from 'react'

function Api4() {

    const [drinks, setDrinks] = useState([]);
    const [search, setSearch] = useState('');

    function getDrinks() {
        fetch('https://thecocktaildb.com/api/json/v1/1/search.php?f=r')
            .then((data) => data.json())
            .then((data1) => setDrinks(data1.drinks));
    }

    useEffect(() => getDrinks(), []);

    function drinkSearch() {
        const filteredDrink = drinks.filter((val, idx, arr) => val.strDrink.toLowerCase().match(search));
        setDrinks(filteredDrink);
    }

    return (
        <div>
            <div>
                <h1>Drinks API</h1>
                <input
                    type="text"
                    name="search"
                    value={search}
                    placeholder='Enter drink name'
                    id='search'
                    onChange={(eve) => setSearch(eve.target.value)}
                />
                <button onClick={() => drinkSearch()}>Search</button>
                <button onClick={() => getDrinks()}>Reset</button>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Drink ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Glass Type</th>
                        <th>Instructions</th>
                        <th>Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    {drinks.map((drink, idx) => (
                        <tr key={idx}>
                            <td>{drink.idDrink}</td>
                            <td>{drink.strDrink}</td>
                            <td>{drink.strCategory}</td>
                            <td>{drink.strAlcoholic}</td>
                            <td>{drink.strGlass}</td>
                            <td>{drink.strInstructions}</td>
                            <td>
                                {drink.strIngredient1},
                                {drink.strIngredient2},
                                {drink.strIngredient3}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Api4