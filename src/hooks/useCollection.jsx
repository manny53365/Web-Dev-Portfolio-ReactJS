import { useEffect, useState, useRef } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy as firestoreOrderBy } from "firebase/firestore";

export const useCollection = (dbCollection, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _orderBy is an array and is "different" on every function call
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = collection(db, dbCollection);

    if (orderBy) {
      ref = query(ref, firestoreOrderBy(...orderBy));
    };

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

  }, [dbCollection, orderBy]);

  return { documents, error }
};
