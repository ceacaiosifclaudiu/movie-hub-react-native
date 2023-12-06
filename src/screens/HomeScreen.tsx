import React from 'react';
import { ScrollView, View } from 'react-native';
import { backgroundColor } from '../commonStyle';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import TrendingMovies from '../components/TrendingMovies';
import useMoviesData from '../hooks/useMoviesData';

const HomeScreen = () => {
    const { movieData, loading } = useMoviesData();

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            <HeaderHomeScreen />

            {
                loading
                    ? (
                        <Loading />
                    ) : (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {movieData.trending.length > 0 && <TrendingMovies trending={movieData.trending} />}

                            <MovieList title="Upcoming" data={movieData.upcoming} />

                            <MovieList title="Top Rated" data={movieData.topRated} />
                        </ScrollView>
                    )
            }
        </View>
    );
};

export default HomeScreen;
