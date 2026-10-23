import React from 'react';
import { useLoaderData } from 'react-router';

const Userdetails = () => {
    const users = useLoaderData();
    console.log(users);
    
    return (
        <div>
            <h1>user details here</h1>
        </div>
    );
};

export default Userdetails;