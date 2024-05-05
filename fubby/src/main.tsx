import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './screens/Home.tsx'
import CCPaths from './screens/CCPaths.tsx'
import Subjects from './screens/Subjects.tsx'
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
        element: <Subjects />
      },
      {
        path: '/disciplinas/:id',
        element: <Details />
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
