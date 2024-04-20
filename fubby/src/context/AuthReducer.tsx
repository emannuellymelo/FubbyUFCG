export interface AuthState {
    currentUser: any;
}

export type AuthAction =
    | { type: 'LOGIN'; payload: any } // Substitua "any" pelo tipo correto do seu usuário
    | { type: 'LOGOUT' };

const AuthReducer = (state: AuthState, action: AuthAction) => {
    switch(action.type) {
        case "LOGIN": {
            return {
                currentUser: action.payload,
            }
        }
        case "LOGOUT": {
            return {
                currentUser: null,
            }
        }
        default:
            return state;
    }
}

export default AuthReducer;