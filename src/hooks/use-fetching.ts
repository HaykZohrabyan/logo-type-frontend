import { useState } from 'react';

type FetchingFunction = () => Promise<void>;
type ReturnType = [FetchingFunction, boolean, string | undefined];

export const useFetching = (callback: FetchingFunction): ReturnType => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const fetching: FetchingFunction = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
