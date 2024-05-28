import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchdata=async()=>{
      try {
        const response = await axios.get('http://localhost:8080/users');
        localStorage.setItem('users', JSON.stringify(response.data));
        setUser(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
    
  }, []);
  console.log(users)
 
  return (
    <div>
    <h2>User Information Table</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.dob}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    
   
  )
}
