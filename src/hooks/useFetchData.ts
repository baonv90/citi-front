import { useState, useEffect } from 'react';
import { DataInterface } from '../interface';

// A hook to fetch data from given url
// it returns the fetching status loading and data
export const useFetchData = (url: RequestInfo) => {
  const [data, setData] = useState<null | DataInterface>();
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    fetch(url).then((res: Response) => {
      res.json().then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
    });
  }, [url]);

  return { data, loading, hasError };
};
