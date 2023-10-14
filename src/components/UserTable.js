// src/components/UserTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./UserTable.css";

function UserTable() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    // Use Axios to fetch data
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>ProfilePic</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.image}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;


