import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useDeleteTransaction = () => {
  const { userID } = useGetUserInfo();
  
  const deleteTransaction = async (transactionID) => {
    const transactionDocRef = doc(db, "transactions", transactionID);
    await deleteDoc(transactionDocRef);
  };
  
  return { deleteTransaction };
};
