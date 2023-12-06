import { useContext, createContext } from "react";
export const EntrainementContext = createContext();
export const useEntrainementContext = () => {
  return useContext(EntrainementContext);
};
