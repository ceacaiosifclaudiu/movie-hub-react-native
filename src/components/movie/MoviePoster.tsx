import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { fallbackMoviePoster, image500 } from '../../api/MovieDB';
import { Movie } from '../../types/types';

const MoviePoster = ({ movie }: { movie: Movie | undefined }) => {
    return <View style={styles.imageContainer}>
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
}

export default MoviePoster

const styles = StyleSheet.create({
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
})