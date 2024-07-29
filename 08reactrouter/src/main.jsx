import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { GitHubInfoLoader } from './components/Github/Github.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='User/' element={<User />}>
        <Route path=':userId' element={<User />}></Route>
      </Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='github' element={<Github />} loader={GitHubInfoLoader}></Route>
      <Route path='*' element={<div>Element not found</div>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
