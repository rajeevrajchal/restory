import { useContext, createContext } from "react";
import useResturant from "../hooks/useResturant";

const appDataContext = createContext<any>({
  resturantData: null,
});
const { Provider } = appDataContext;

const useAppDataProvider = () => {
  const resturantData = useResturant();
  return {
    resturantData,
  };
};

export const AppDataProvider = ({ children }: any) => {
  const data: any = useAppDataProvider();
  return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(appDataContext);
