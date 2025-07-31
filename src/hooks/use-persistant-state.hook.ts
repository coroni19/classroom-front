import { useEffect, useState } from "react";

const usePersistantState = <T>(key: string, defaultValue: T) => {
  const initialValue = localStorage.getItem(key);

  const [state, setState] = useState<T>(
    initialValue ? JSON.parse(initialValue) : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState] as const;
};

export default usePersistantState;
