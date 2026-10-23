import React from 'react';
import { Link } from 'react-router';
const Users = ({ users }) => {
  // Destructure properties from the nested 'users' object
  const { id, name, email, phone, username } = users;
  
  return (
    <div className="border p-4 m-2 rounded-lg shadow bg-white text-black">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p><small>Phone: {phone}</small></p>
      <Link to={`/user${id}`}> Show details</Link>
    </div>
  );
};

export default Users;