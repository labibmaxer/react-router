import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Laptop from './components/Laptop/Laptop.jsx';
import Mobile from './components/Root/Header/Mobile/Mobile.jsx';
import Car from './components/car/Car.jsx';
import Header from './components/Root/Header/Header.jsx';
import User from './components/User/User.jsx';
import Userdetails from './components/Users/UserDetails/Userdetails.jsx';

const router = createBrowserRouter ([

     {
      path : '/' ,
      Component: Root,
      children : [
        {index: true, Component: Header},
        {path: 'mobile' , Component: Mobile},
        {path: 'Car' , Component: Car},
         {path : 'laptop' , Component: Laptop},
      {
  path: 'user',
  loader: () => fetch('/data.json'),
  Component: User,
  children: [
    {
      path: ':userId',
      loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      Component: Userdetails,
    }
  ]
}
      ]
     },
  {
     path : '/' ,
     element: <div>hello from react router </div>

  },
  {
    path : 'app' ,
     Component: App
  },
  {
    path: 'user/:Userdetails',
   loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    Component: Userdetails
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
