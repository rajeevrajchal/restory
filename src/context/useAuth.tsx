import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { toast } from "react-toastify";
import { auth, db } from "../plugins/firebase";

const authContext = createContext({
  loggedUser: null,
  loading: false,
} as any);

const { Provider } = authContext;

const useAuthProvider = () => {
  const [loggedUser, setLoggedUser] = useState(null as any);
  const [loading, setLoading] = useState<boolean>(false);

 const navigate = useNavigate();

  // functions
  const isUserLoggedIn = () => loggedUser !== null;

  const register = async (userData: any) => {
    // eslint-disable-next-line object-curly-newline
    const { email, password, username, firstname, lastname } = userData;
    console.log("the user data are", {
      email,
      password,
      username,
      firstname,
      lastname,
    });

    createUserWithEmailAndPassword(auth, email, password || "")
      .then((userCredential: any) => {
        // eslint-disable-next-line no-shadow
        const { user } = userCredential;
        addDoc(collection(db, "users"), {
          uid: user.uid,
          username,
          firstname,
          lastname,
          authProvider: "local",
          email,
        })
          .then(() => {
            toast.success(`Welcome to ReStory ${username}`);
          })
          .catch(err => {
            console.log("err inside function", err);
            toast.error(`Failed to create user`);
          });
      })
      .catch((err: any) => {
        console.error("error", { err });
        toast.error(`Failed to create user`);
      });
  };

  const login = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((loginRes: any) => {
        setLoggedUser(loginRes.user);
<<<<<<< HEAD
        navigate(`/`);
=======
        navigate("/", { replace: true });
>>>>>>> 95c5d1db8e89fb3ff67911b3d65ec2cb8f9e035c
        toast.success("Login sucess");
      })
      .catch((err: any) => {
        setLoggedUser(null);
        toast.error(err);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setLoggedUser(null);
        navigate("/login");
      })
      .catch(() => {
        toast.error("Logging out failed");
      });
  };

  const handleAuthStateChanged = (user: any) => {
    setLoading(true);
    if (user?.uid) {
      setLoggedUser(user);
    }
    setLoading(false);
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
    register,
    loading,
    isUserLoggedIn,
    handleAuthStateChanged,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authData = useAuthProvider();
  return <Provider value={authData}>{children}</Provider>;
};

export const useAuth = () => useContext(authContext);
