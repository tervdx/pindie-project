import {getNormalizedGamesDataByCategory} from './api-utils';
import {useState, useEffect} from 'react';

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNormalizedGamesDataByCategory(endpoint, category);
      setData(data);
    }
    fetchData()
  }, []);

  return data;
}