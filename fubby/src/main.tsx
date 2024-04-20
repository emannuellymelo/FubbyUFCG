import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './screens/Home.tsx'
import CCPaths from './screens/CCPaths.tsx'
import Disciplines from './screens/Disciplines.tsx'
import Login from './screens/Login.tsx'
import Details from './screens/Details.tsx'
import StudentSpace from './screens/StudentSpace.tsx'
import OptativesCheck from './screens/OptativesCheck.tsx'
import ComplementaryHours from './screens/ComplementaryHours.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/trilhas',
        element: <CCPaths />
      },
      {
        path: '/disciplinas',
        element: <Disciplines />
      },
      {
        path: '/disciplinas/:id',
        element: <Details />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path:'/area-do-aluno',
        element: <StudentSpace/>
      },
      {
        path:'/area-do-aluno/analise-optativas',
        element: <OptativesCheck/>
      },
      {
        path:'area-do-aluno/horas-complementares',
        element: <ComplementaryHours/>
      }
    ]
  },

]);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
