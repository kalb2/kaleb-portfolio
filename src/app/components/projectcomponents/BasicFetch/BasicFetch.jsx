"use client";
import { useState, useEffect } from "react";

export default function BasicFetch() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    console.log("here");
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        if (e.name === "AbortError") return;

        setError(e);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="max-h-[60vh]" >
      <p>User Data</p>
      {isLoading ? (
        <p>Loading user data...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="sm:max-h-[50vh] max-h-[40vh] overflow-y-scroll">
          <pre className=" whitespace-pre-wrap">
            {JSON.stringify(users, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
