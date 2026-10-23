import React from 'react';
import { useLoaderData } from 'react-router';
import Users from '../Users/Users';

const User = () => {
  const users = useLoaderData(); // Make sure this is named 'users'

  return (
    <div>
      <h2>This is my user page</h2>
      <div>
        {users.map((singleUser) => (
          <Users key={singleUser.id} users={singleUser} />
        ))}
      </div>
    </div>
  );
};

export default User;