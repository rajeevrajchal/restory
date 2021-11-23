import { useState, useContext, createContext, useEffect } from "react";

type LayoutProviderType = {
  navSize: string;
  handleNavChange: () => void;
};

const layoutContext = createContext<LayoutProviderType>({
  navSize: "large",
  handleNavChange: () => {},
});

const { Provider } = layoutContext;

const useLayoutProvider = () => {
  const [navSize, setNavSize] = useState<string>("large");

  const handleNavChange = () => {
    if (navSize === "large") {
      localStorage.setItem("navSize", "small");
      setNavSize("small");
    } else {
      localStorage.setItem("navSize", "large");
      setNavSize("large");
    }
  };

  useEffect(() => {
    const navSize = localStorage.getItem("navSize");
    setNavSize(navSize || "large");
  }, []);
  return {
    navSize,
    handleNavChange,
  };
};

export const LayoutProvider = ({ children }: any) => {
  const data = useLayoutProvider();
  return <Provider value={data}>{children}</Provider>;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useLayout = () => useContext(layoutContext);
