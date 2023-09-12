"use client"
import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const isClient = typeof window !== "undefined";

  const [value, setValue] = useState(() => {
    if (isClient) {
      const localValue = localStorage.getItem(key);
      if (localValue == null) {
        if (typeof initialValue === "function") {
          return initialValue();
        } else {
          return initialValue;
        }
      } else {
        return JSON.parse(localValue);
      }
    }
    return initialValue;
  });

  useEffect(() => {
    if (isClient) {
      if (value !== undefined) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  }, [value, key]);

  return [value, setValue];
}