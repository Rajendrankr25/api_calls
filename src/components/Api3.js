import React, { useEffect, useState } from 'react'

function Api3() {

    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');

    function userData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => data.json())
            .then((data1) => setUsers(data1));
    }

    useEffect(() => userData(), []);

    function updatedUser() {
        const filteredUser = users.filter((val, idx, arr) => val.name.toLowerCase().match(searchText));
        setUsers(filteredUser);
    }

    return (
        <div>
            <div>
                <h1>Users API</h1>
                <br />
                <input
                    type="text"
                    name="name"
                    value={searchText}
                    id='name'
                    placeholder='Enter user name'
                    onChange={(eve) => setSearchText(eve.target.value)}
                />
                <button onClick={() => updatedUser()}>Search</button>
                <button onClick={() => userData()}>Reset</button>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.address.street},
                                {user.address.city},
                                {user.address.zipcode}
                            </td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Api3