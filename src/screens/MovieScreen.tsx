import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet
} from 'react-native';
import { backgroundColorSecondary } from '../commonStyle';
import HeaderBack from '../components/HeaderBack';
import Loading from '../components/Loading';
import CastAndSimilarMovies from '../components/movie/CastAndSimilarMovies';
import MovieInfo from '../components/movie/MovieInfo';
import MoviePoster from '../components/movie/MoviePoster';
import useSingleMovieData from '../hooks/useSingleMovieData';
import { Item, Nav } from '../types/types';

const MovieScreen = () => {
  const { params: item } = useRoute();
  const { id } = item as Item;
  const nav: Nav = useNavigation();
  const { loading, movie, cast, similarMovies, favorite, setFavorite, handleAddToFavorites } = useSingleMovieData(id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderBack addToFavorite={handleAddToFavorites} favorite={favorite} setFavorite={setFavorite} />

      {
        loading
          ?
          <Loading />
          :
          (
            <>
              <MoviePoster movie={movie} />
              <MovieInfo movie={movie} />
              <CastAndSimilarMovies cast={cast} similarMovies={similarMovies} nav={nav} />
            </>
          )
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColorSecondary,
    position: 'relative',
    minHeight: '100%'
  },
});

export default MovieScreen;
