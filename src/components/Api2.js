import React, { useEffect, useState } from 'react'

function Api2() {

    const [products, setProducts] = useState([]);
    const [searchId, setSearchId] = useState('');

    const getProducts = () => {
        fetch("https://fakestoreapi.com/products", { method: "GET" })
            .then((data) => data.json())
            .then((data1) => setProducts(data1));
    }

    useEffect(() => getProducts(), []);

    const searchProductsById = () => {
        const filteredProducts = products.filter((val, idx, arr) => val.id == searchId);
        setProducts(filteredProducts);
    }

    return (
        <div>
            <h1>Fake Store API</h1>
            <div>
                <input
                    type="text"
                    name="id"
                    placeholder='Enter product ID'
                    id='id'
                    value={searchId}
                    onChange={(eve) => setSearchId(eve.target.value)}
                />
                <button onClick={() => searchProductsById()}>Search</button>
                <button onClick={() => getProducts()}>Reset</button>
            </div>
            <br />
            <table className='productTable'>
                <thead className='tableHead'>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th>IMAGE</th>
                        <th>RATING</th>
                    </tr>
                </thead>
                <tbody className='tableBody'>
                    {products.map((product, key) => (
                        <tr key={key}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.image}</td>
                            <td>
                                Rate:{product.rating.rate},Count:{product.rating.count}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Api2