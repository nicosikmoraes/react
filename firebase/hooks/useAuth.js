import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // inicialização do Firebase

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider value={{ registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
