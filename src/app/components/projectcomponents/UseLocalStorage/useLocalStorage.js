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
  });

  useEffect(() => {
    if (isClient) {
      if (value !== undefined) { // Add a check here
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  }, [value, key]);

  return [value, setValue];
}




// This is the code for using local storage before the bonus 
// export function useLocalStorage (key, initialValue) {
//     const [value, setValue] = useState(() => {
//         const localValue = localStorage.getItem(key)
//         if(localValue == null) {
//             if (typeof initialValue === "function") {
//                 return initialValue()
//             } else {            
//                 return initialValue
//             }
//             } else {
//         return localValue
//     }
//     })

//     useEffect(() => {
//         localStorage.setItem(key, value)
//     }, [value])

//     return [value, setValue]
// }