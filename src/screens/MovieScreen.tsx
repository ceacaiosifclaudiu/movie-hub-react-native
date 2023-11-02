import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {
  fallbackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500
} from '../api/MovieDB';
import { backgroundColorSecondary, secondaryTextColor, whiteTextColor } from '../commonStyle';
import Cast from '../components/Cast';
import HeaderBack from '../components/HeaderBack';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import { addFavoriteMovie, removeFavoriteMovie } from '../store/itemSlice';
import { Item, ItemsState, Movie, Nav } from '../types/types';

const MovieScreen = () => {
  const { params: item } = useRoute();
  const { id } = item as Item;
  const nav:Nav = useNavigation();
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
    fetchData(id);
  }, [item]);

  const fetchData = async (id: number) => {
    setLoading(true);
    await Promise.all([getMovieDetails(id), getMovieCredits(id), getSimilarMovies(id)]);
    setLoading(false);
  };

  const getMovieDetails = async (id: number) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    setLoading(false);
  }

  const getMovieCredits = async (id: number) => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) setCast(data.cast)
  }

  const getSimilarMovies = async (id: number) => {
    const data = await fetchSimilarMovies(id);
    if (data) setSimilarMovies(data.results);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderBack addToFavorite={handleAddToFavorites} favorite={movieExistsInFavorites} setFavorite={setFavorite} />

      {
        loading
          ?
          <Loading />
          :
          (
            <>
              <View style={styles.imageContainer}>
                {movie && movie.poster_path && (
                  <Image
                    style={styles.moviePoster}
                    source={{ uri: image500(movie.poster_path) || fallbackMoviePoster }}
                  />
                )}
                <LinearGradient
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  colors={['transparent', 'rgba(23,23,23,0.87)', 'rgba(23,23,23,1)']}
                  style={styles.gradient}
                />
              </View>

              <View style={styles.movieInfoContainer}>
                <Text style={styles.movieTitle}>{movie?.title}</Text>

                {
                  movie?.id
                    ?
                    <Text style={styles.movieDetails}>Released • {movie?.release_date} • {movie?.runtime} mins</Text>
                    : null
                }

                <View style={styles.genreContainer}>
                  {
                    movie?.genres.map((genre, index) => {
                      let showDot = index + 1 != movie.genres.length;
                      return (
                        <Text
                          key={genre.id}
                          style={styles.genre}
                        >
                          {genre.name} {showDot ? "•" : null}
                        </Text>)
                    })
                  }
                </View>

                <Text style={styles.description}>
                  {movie?.overview}
                </Text>

                {cast.length > 0 && <Cast cast={cast} nav={nav} />}

                {similarMovies.length > 0 && <MovieList title="Similar Movies" data={similarMovies} hideSeeAll />}
              </View></>
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
  movieInfoContainer: {
    marginTop: -(Dimensions.get('window').height * 0.09),
  },
  movieTitle: {
    color: whiteTextColor,
    fontSize: 27,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  movieDetails: {
    color: secondaryTextColor,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',

  },
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 4,
    paddingHorizontal: 2,
    gap: 4,
  },
  genre: {
    color: secondaryTextColor,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  description: {
    color: secondaryTextColor,
    fontSize: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: '100%',
  },
  gradient: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
    position: 'absolute',
    bottom: 0,
  },
  moviePoster: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5,
    objectFit: 'cover',
  },
});

export default MovieScreen;
