import React, { createContext, useContext, useState } from 'react';

// Define your user type
interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
  [key: string]: unknown; // optional
}

type GlobalEventFn = (...args: unknown[]) => void;

interface AppData {
  user?: String;
  setUser: (user: String | undefined) => void;
  globalEvent?: GlobalEventFn;
  setGlobalEvent: (fn: GlobalEventFn) => void;
}

const AppDataContext = createContext<AppData | undefined>(undefined);

export const AppDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [globalEvent, setGlobalEvent] = useState<GlobalEventFn>(() => () => {
    console.warn('[AppDataContext] globalEvent not implemented');
  });

  return (
    <AppDataContext.Provider value={{ user, setUser, globalEvent, setGlobalEvent }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = (): AppData => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};
