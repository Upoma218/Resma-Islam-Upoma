import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactMe from './Pages/ContactForm/ContactForm';
import AboutMe from './Pages/AboutMe/AboutMe';
import Projects from './Pages/Projects/Projects';
import Main from './Layout/Main';
import HomePage from './Pages/Home/HomePage';
import Blogs from './Pages/Blogs/Blogs';
import ProjectInfo from './Pages/Projects/ProjectInfo';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/aboutMe',
          element: <AboutMe></AboutMe>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/projectInfo/:id',
          element: <ProjectInfo></ProjectInfo>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/contactMe',
          element: <ContactMe></ContactMe>
        }
      ]
    }

  ])
  return (
    <div  data-theme="forest">
      <RouterProvider router={router}></RouterProvider>
      <Typewriter></Typewriter>
    </div>
  );
}

export default App;
