import React from 'react';
import { searchMovies } from '../api/MovieDB';
import { Results } from '../types/types';


const useSearch = () => {
    const [loading, setLoading] = React.useState(false);
    const [results, setResults] = React.useState<Results[]>([]);
  
    const handleSearch = async (value: string) => {
      if (value && value.length > 2) {
        setLoading(true);
        try {
          const data = await searchMovies({
            query: value,
            include_adult: 'false',
            language: 'en-US',
            page: '1',
          });
          setResults(data.results || []);
        } catch (error) {
          console.error('Error searching movies:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setResults([]);
      }
    };
  
    return {
      loading,
      results,
      handleSearch,
    };
  };

export default useSearch