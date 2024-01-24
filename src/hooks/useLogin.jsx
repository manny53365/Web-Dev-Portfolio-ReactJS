import { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
  
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: 'LOGIN', payload: res.user });

      // const userDocRef = db.collection('users').doc(res.user.uid);
      // await userDocRef.update({ online: true });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      };

    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      };
    };
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error }
};
