import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
            dispatch({type:"LOGIN", payload:userCredential.user})
            navigate("/disciplinas")
        } catch (errorMessage) {
            console.error(errorMessage);
            setError(true);
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <span>Wrong email or password</span>}
            </form>
        </div>
    );
};

export default Login;
const styles = `
.login{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    form{
      display: flex;
      flex-direction: column;
      align-items: center;

      input{
        width: 200px;
        height: 30px;
        margin: 10px;
        border-color: 'black';
      }

      button{
        width: 200px;
        height: 30px;
        border: none;
        background-color: purple;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }

      span{
        font-size: 12px;
        color: red;
        margin-top: 10px;
      }
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);