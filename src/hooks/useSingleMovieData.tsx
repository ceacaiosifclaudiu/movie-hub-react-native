import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchMovieCredits,
    fetchMovieDetails,
    fetchSimilarMovies
} from '../api/MovieDB';
import { addFavoriteMovie, removeFavoriteMovie } from '../store/itemSlice';
import { ItemsState, Movie } from '../types/types';

const useSingleMovieData = (id: number) => {
    const [loading, setLoading] = React.useState(true);
    const [movie, setMovie] = React.useState<Movie>();
    const [cast, setCast] = React.useState([]);
    const [similarMovies, setSimilarMovies] = React.useState([]);

    const dispatch = useDispatch();
    const favoriteMovies = useSelector((state: { favorites: ItemsState }) => state.favorites.favoriteMovies);
    const movieExistsInFavorites = favoriteMovies?.some((movieFind: Movie) => movieFind.id === movie?.id);
    const [favorite, setFavorite] = React.useState(movieExistsInFavorites);

    const handleAddToFavorites = () => {
        if (movie) {
            const movieExistsInFavorites = favoriteMovies.some(
                (favoriteMovie: Movie) => favoriteMovie.id === movie.id
            );

            if (!movieExistsInFavorites) {
                dispatch(addFavoriteMovie(movie));
            } else {
                dispatch(removeFavoriteMovie(movie));
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [details, credits, similar] = await Promise.all([
                    fetchMovieDetails(id),
                    fetchMovieCredits(id),
                    fetchSimilarMovies(id),
                ]);
                setMovie(details);
                setCast(credits.cast || []);
                setSimilarMovies(similar.results || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return {
        loading,
        movie,
        cast,
        similarMovies,
        favorite,
        setFavorite,
        handleAddToFavorites,
    };
};

export default useSingleMovieData