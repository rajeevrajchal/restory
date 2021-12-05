import { useState } from "react";
import { updateDoc, collection, onSnapshot, doc } from "firebase/firestore";
import { db } from "../plugins/firebase";
import { toast } from "react-toastify";

const useResturant = () => {
  const collRef = collection(db, "resturants");
  const [resturants, setResturants] = useState<any>(null);

  const getResturants = () => {
    onSnapshot(
      collRef,
      (snapshot) => {
        let resturants: any = [];
        snapshot.docs.forEach((doc) => {
          resturants.push({ ...doc.data(), id: doc.id });
        });
        setResturants(resturants);
      },
      (error) => {
        console.log("errors", error.message);
        toast.error(error.message);
      }
    );
  };

  const verifyResturant = (object: any, type: string) => {
    const docRef = doc(db, `resturants`, object.id);
    updateDoc(docRef, {
      [type]: !Boolean(object[type]),
    })
      .then(() => {
        toast.success(
          type === "verified" ? "Resturant Verified" : "Resturant Publiced"
        );
      })
      .catch((err) => {
        toast.error(err.message);
        console.log("the error", err);
      });
  };

  return {
    resturants,
    // functions
    verifyResturant,
    getResturants,
  };
};

export default useResturant;
