import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPersonDetails,
    fetchPersonMovies
} from '../api/MovieDB';
import { addFavoriteActor } from '../store/itemSlice';
import { ItemsState, Person } from '../types/types';

const usePersonData = (id: number) => {
    const [loading, setLoading] = React.useState(false);
    const [personMovies, setPersonMovies] = React.useState([]);
    const [personDetails, setPersonDetails] = React.useState<Person>({
        id: '',
        name: '',
        birthday: '',
        place_of_birth: '',
        profile_path: '',
        popularity: 0,
        biography: '',
        gender: 0,
        known_for_department: '',
    });
    const dispatch = useDispatch();
    const favoriteActors = useSelector((state: { favorites: ItemsState }) => state.favorites.favoriteActors);

    const isFavorite = favoriteActors?.some((actor: any) => actor.id === personDetails.id);
    const [favorite, setFavorite] = React.useState(isFavorite);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [detailData, moviesData] = await Promise.all([fetchPersonDetails(id), fetchPersonMovies(id)]);
            if (detailData) setPersonDetails(detailData);
            if (moviesData) setPersonMovies(moviesData.cast);
            setLoading(false);
        };

        fetchData();
    }, [id]);

    const addToFavoritesActorHandler = () => {
        if (personDetails) {
            dispatch(addFavoriteActor(personDetails));
            setFavorite(!favorite);
        }
    };

    return {
        loading,
        personMovies,
        personDetails,
        isFavorite: favorite,
        setFavorite,
        addToFavoritesActorHandler,
    };
};

export default usePersonData