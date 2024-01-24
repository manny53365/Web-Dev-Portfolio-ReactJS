import { useReducer, useEffect, useState } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc } from 'firebase/firestore';
import  {ref  as imgRef, uploadBytes, getDownloadURL} from 'firebase/storage';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null }
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload }
    case 'UPDATED_DOCUMENT':
      return {isPending: false, document: action.payload, success: true, error: null} 
    default:
      return state
  };
};

export const useFirestore = (dbCollection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = collection(db,dbCollection);

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    };
  };

  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      // const createdAt = timestamp.fromDate(new Date());
      const uploadPath = `thumbnails/${doc.projectName}/${doc.projectThumbnail.name}`;
      const img = imgRef(storage, uploadPath);
      await uploadBytes(img, doc.projectThumbnail);
      const imgURL = await getDownloadURL(img);
      const addedDocument = await addDoc(ref,{ ...doc, projectThumbnail: imgURL });
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    };
  };

  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' });
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' });
    };
  };

  const updateDocument = async (id, updates) => {
    dispatch({type: 'IS_PENDING'});

    try {

      const updatedDoc = await ref.doc(id).update(updates);
      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: updatedDoc });

      return updatedDoc;

    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not update document' });
      return null;
    };

  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response, updateDocument }

};
