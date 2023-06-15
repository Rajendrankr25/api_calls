import React, { useEffect, useState } from 'react'

function Api1() {

    const [movies, setMovies] = useState([]);
    const [input, setInput] = useState('');

    const getMovies = () => {
        fetch("https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json", { method: "GET" })
            .then((data) => data.json())
            .then((data1) => setMovies(data1));
    }

    useEffect(() => getMovies(), []);

    const updatedMovies = () => {
        const filteredMovies = movies.filter((val, idx, arr) => val.year == input);
        setMovies(filteredMovies);
    }

    return (
        <div>
            <div>
                <h1>Movie Data API</h1>
                <input
                    type="text"
                    name="search"
                    placeholder='Enter released year'
                    id='search'
                    value={input}
                    onChange={(eve) => setInput(eve.target.value)}
                />
                <button onClick={() => updatedMovies()}>Search</button>
                <button onClick={() => getMovies()}>Reset</button>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>YEAR</th>
                        <th>TITLE</th>
                        <th>VOTES</th>
                        <th>GENRE IDS</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, key) => (
                        <tr key={key}>
                            <td>{movie.year}</td>
                            <td>{movie.title}</td>
                            <td>{movie.votes}</td>
                            <td>{movie.genreIds}</td>
                            <td>{movie.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Api1
