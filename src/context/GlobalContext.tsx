import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';

// Define the shape of the context state
export interface GlobalContextState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Create the context with a default value
const GlobalContext = createContext<GlobalContextState | undefined>(undefined);

// Define the props for the provider component
interface GlobalProviderProps {
  children: ReactNode;
}

// Create the provider component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Create a custom hook for easy context consumption
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
