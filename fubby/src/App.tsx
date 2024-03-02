import { ReactNode, useContext } from 'react';
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext, AuthContextProvider } from './context/AuthContext';
function App() {

  // interface AuthContextProviderProps {
    //     children: ReactNode;
    // }

    // const RequireAuth = ({ children }: AuthContextProviderProps) => {
    //     return currentUser ? children : <Navigate to="/login" />;
    // };

  return (
    <div>
      <AuthContextProvider>
      <Outlet/>
      </AuthContextProvider>
    </div>
  )
}

export default App
