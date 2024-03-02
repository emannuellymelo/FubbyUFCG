import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'
import theme from './styles/theme.ts'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './router/Home.tsx'
import CCPaths from './router/CCPaths.tsx'
import Disciplines from './router/Disciplines.tsx'
import Login from './router/Login.tsx'
import Details from './router/Details.tsx'
import AreaDoAluno from './router/AreaDoAluno.tsx'
import OptativesCheck from './router/OptativesCheck.tsx'
import ComplementaryHours from './router/ComplementaryHours.tsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path:'/Trilhas',
//     element: <CCPaths/>
//   }
// ]);

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
        element: <AreaDoAluno/>
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
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
