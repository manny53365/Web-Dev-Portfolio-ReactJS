import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (dbCollection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  // const query = useRef(_query).current;
  // const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    const ref = collection(db, dbCollection);

    // if (query) {
    //   ref = ref.where(...query);
    // };
    // if (orderBy) {
    //   ref = ref.orderBy(...orderBy);
    // };

    const unsubscribe = onSnapshot(ref, snapshot => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id});
      });
      
      // update state
      setDocuments(results);
      setError(null);
    }, error => {
      console.log(error);
      setError('could not fetch the data');
    })

    // unsubscribe on unmount
    return () => unsubscribe();

  }, [dbCollection]);

  return { documents, error }
};
