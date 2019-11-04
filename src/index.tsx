import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';

interface IUser {
    id: number,
    name: string,
    email: string,
    phone: string,
    city: string
}

export function Index() {

    const [users, setUsers] = useState<IUser[]>([]);

    async function loadData() {
        let response;

        try {
            response = await axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/users'
            });
        } catch (error) {
            response = error.response;
        }

        if (response.status == 200) {

            let users: IUser[] = [];
            response.data.forEach(user => {
                users.push({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    city: user.address.city
                })
            });
            setUsers(users);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);