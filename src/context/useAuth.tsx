import { useState, useContext, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../plugins/firebase";

const authContext = createContext({
  loggedUser: null,
  isLoading: false,
} as any);

const { Provider } = authContext;

const useAuthProvider = () => {
  const [loggedUser, setLoggedUser] = useState(null as any);
  const history = useHistory();

  // functions
  const isUserLoggedIn = () => loggedUser;

  const login = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((loginRes: any) => {
        setLoggedUser(loginRes.user);
        history.push("/");
        toast.success("Login sucess");
      })
      .catch((err: any) => {
        setLoggedUser(null);
        toast.error(err);
      });
  };

  const logout = () => {
    console.log("hello world");
    signOut(auth)
      .then(() => {
        setLoggedUser(null);
        history.push("/login");
      })
      .catch(() => {
        toast.error("Logging out failed");
      });
  };

  const handleAuthStateChanged = (user: any) => {
    console.log("the user", user);
    if (user?.uid) {
      setLoggedUser(user);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loggedUser,
    login,
    logout,
    isUserLoggedIn,
    handleAuthStateChanged,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authData = useAuthProvider();
  return <Provider value={authData}>{children}</Provider>;
};

export const useAuth = () => useContext(authContext);
