import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Cast from '../components/Cast';
import HeaderBack from '../components/HeaderBack';
import MovieList from '../components/MovieList';
import { backgroundColor } from '../commonStyle';
import { Movie, Person, ItemsState, Nav } from '../types/types';

const FavoriteScreen = () => {
    const nav: Nav = useNavigation();
    const favoriteMovies = useSelector((state: { favorites: ItemsState }) => state.favorites.favoriteMovies);

    const favoriteActors = useSelector((state: { favorites: ItemsState }) => state.favorites.favoriteActors);

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor, paddingTop: 80 }}>
            <HeaderBack />

            {favoriteActors && favoriteActors.length > 0 && favoriteActors.map((fav: Person) => {
                return <Cast title="Favorite Actors" cast={favoriteActors} nav={nav} key={fav.id} />
            }

            )}

            {favoriteMovies && favoriteMovies.length > 0 && favoriteMovies.map((fav: Movie) => {
                return (
                    <MovieList title="Favorite Movies" data={favoriteMovies} key={fav.id} />
                )
            })}
        </View>
    )
}

export default FavoriteScreen

