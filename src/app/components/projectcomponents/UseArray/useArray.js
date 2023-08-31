import { useState, useCallback } from "react";

export function useArray(initialValue) {
    const [array, setArray] = useState (initialValue)

    const push = useCallback(element => {
        setArray(a => [...a, element])
      }, [])
    
      const replace = useCallback((index, newElement) => {
        setArray(a => {
          return [...a.slice(0, index), newElement, ...a.slice(index + 1)]
        })
      }, [])
    
      const filter = useCallback(callback => {
        setArray(a => {
          return a.filter(callback)
        })
      }, [])
    
      const remove = useCallback(index => {
        setArray(a => {
          return [...a.slice(0, index), ...a.slice(index + 1)]
        })
      }, [])
    
      const clear = useCallback(() => {
        setArray([])
      }, [])
    
      const reset = useCallback(() => {
        setArray(initialValue)
      }, [initialValue])



// Functions without useCallback

    // function push(element) { 
    //     setArray(a => [...a, element])
    // }

    // function replace(index, newElement) {
    //     setArray(a => {
    //         return [...a.slice(0,index), newElement, ...a.slice(index + 1)]
    //     })
    // }

    // function filter(callback) {
    //     setArray(a => {
    //         return a.filter(callback)
    //     })
    // }

    // function remove(index, newElement) {
    //     setArray(a => {
    //         return [...a.slice(0,index), ...a.slice(index + 1)]
    //     })
    // }

    // function clear() {
    //     setArray([])
    // }

    // function reset() {
    //     setArray(initialValue)
    // }

    return {array, set: setArray, push, replace, filter, remove, clear, reset}
}