import { useEffect, useState } from "react";

export const useFetcher = (callbackFnAsync, initialValue = {}) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function GetEvents() {
      setIsLoading(true);
      try {
        const dataResponse = await callbackFnAsync();
        setData(dataResponse);
      } catch (ex) {
        setError(ex);
      } finally {
        setIsLoading(false);
      }
    }

    GetEvents();
  }, []);

  return {
    error,
    data,
    isLoading,
  };
};
