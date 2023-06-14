import React, { useEffect, useState } from 'react'

function Api2() {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch("https://fakestoreapi.com/products", { method: "GET" })
            .then((data) => data.json())
            .then((data1) => setProducts(data1));
    }

    useEffect(() => getProducts(), []);

    console.log(products);

    const searchProducts = (products) => {

    }

    return (
        <div>
            <h1>Fake Store API</h1>
            <div>
                <input type="text" name="search" />
                <button>Search</button>
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

function ProductList() {
    return (
        <div>

        </div>
    )
}

export default Api2