import { useReducer, useEffect, useState } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import  {ref  as imgRef, uploadBytes, getDownloadURL, deleteObject} from 'firebase/storage';

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

    if (dbCollection === 'experience'){
      try {
        const addedDocument = await addDoc(ref, {...doc, createdAt: serverTimestamp()});
        dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
      } catch (err){
        dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
      }

    } else if (dbCollection === 'skills') {
      try {
        const uploadPath = `skill-logos/${doc.skillName}/${doc.skillIcon.name}`;
        const img = imgRef(storage, uploadPath);
        await uploadBytes(img, doc.skillIcon);
        const imgURL = await getDownloadURL(img);
        const addedDocument = await addDoc(ref, {...doc, skillIcon: imgURL, createdAt: serverTimestamp()});
        dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });

      } catch (err) {
        dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
      }
    } else {
      try {
        const uploadPath = `thumbnails/${doc.projectName}/${doc.projectThumbnail.name}`;
        const img = imgRef(storage, uploadPath);
        await uploadBytes(img, doc.projectThumbnail);
        const imgURL = await getDownloadURL(img);
        const addedDocument = await addDoc(ref,{ ...doc, projectThumbnail: imgURL, createdAt: serverTimestamp() });
        dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
      }
      catch (err) {
        dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
      };
    };
  };

  const deleteDocument = async (id, imgURL) => {
    dispatch({ type: 'IS_PENDING' });

    try {

      const docRef = doc(db, dbCollection, id);
      await deleteDoc(docRef);

      if (imgURL) {
        const imageRef = imgRef(storage, imgURL);
        await deleteObject(imageRef);
      };

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
