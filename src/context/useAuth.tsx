import { useState, useContext, createContext, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../plugins/firebase";

const authContext = createContext({
  loggedUser: null,
  isLoading: false,
} as any);

const { Provider } = authContext;

const useAuthProvider = () => {
  const [loggedUser, setLoggedUser] = useState(null as any);
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (loggedUser) {
      navigate(from, { replace: true });
    }
  }, [loggedUser, navigate,from]);

  const login = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((loginRes: any) => {
        setLoggedUser(loginRes.user);
        navigate("/", { replace: true });
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
        navigate("/login", { replace: true });
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
    handleAuthStateChanged,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authData = useAuthProvider();
  return <Provider value={authData}>{children}</Provider>;
};

export const useAuth = () => useContext(authContext);
