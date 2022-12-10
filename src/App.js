import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactMe from './Pages/ContactForm/ContactForm';
import AboutMe from './Pages/AboutMe/AboutMe';
import Projects from './Pages/Projects/Projects';
import Main from './Layout/Main';
import HomePage from './Pages/Home/HomePage';

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
          path: '/contactMe',
          element: <ContactMe></ContactMe>
        }
      ]
    }

  ])
  return (
    <div data-theme="night">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
