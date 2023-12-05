import { useEffect, useState } from 'react';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/MovieDB';
import { Movie } from '../types/types';

interface MovieData {
    trending: Movie[];
    upcoming: Movie[];
    topRated: Movie[];
}

const useMoviesData = () => {
    const [movieData, setMovieData] = useState<MovieData>({
        trending: [],
        upcoming: [],
        topRated: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [trendingData, upcomingData, topRatedData] = await Promise.all([
                    fetchTrendingMovies(),
                    fetchUpcomingMovies(),
                    fetchTopRatedMovies(),
                ]);

                setMovieData({
                    trending: trendingData.results || [],
                    upcoming: upcomingData.results || [],
                    topRated: topRatedData.results || [],
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { movieData, loading };
};

export default useMoviesData;
