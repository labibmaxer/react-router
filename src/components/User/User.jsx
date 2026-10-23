import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const user = useLoaderData();
    console.log(user);
    
    return (
        <div>
            <h1>This is my user page </h1>
        </div>
    );
};

export default User;