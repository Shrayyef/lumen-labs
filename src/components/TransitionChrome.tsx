"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type TransitionChromeValue = {
  veiling: boolean;
  setVeiling: (next: boolean) => void;
};

const TransitionChromeContext = createContext<TransitionChromeValue | null>(
  null,
);

export function TransitionChromeProvider({ children }: { children: ReactNode }) {
  // Start veiled so first paint matches the load screen (header hidden).
  const [veiling, setVeilingState] = useState(true);
  const setVeiling = useCallback((next: boolean) => {
    setVeilingState(next);
  }, []);

  const value = useMemo(
    () => ({ veiling, setVeiling }),
    [veiling, setVeiling],
  );

  return (
    <TransitionChromeContext.Provider value={value}>
      {children}
    </TransitionChromeContext.Provider>
  );
}

export function useTransitionChrome() {
  const ctx = useContext(TransitionChromeContext);
  if (!ctx) {
    return { veiling: false, setVeiling: () => undefined };
  }
  return ctx;
}
