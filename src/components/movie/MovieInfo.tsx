import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../../types/types';
import { secondaryTextColor, whiteTextColor } from '../../commonStyle';

const MovieInfo = ({ movie }: { movie: Movie | undefined }) => (
    <View style={styles.movieInfoContainer}>
        <Text style={styles.movieTitle}>{movie?.title}</Text>

        {movie?.id && (
            <Text style={styles.movieDetails}>
                Released • {movie?.release_date} • {movie?.runtime} mins
            </Text>
        )}

        <View style={styles.genreContainer}>
            {movie?.genres.map((genre, index) => (
                <Text key={genre.id} style={styles.genre}>
                    {genre.name} {index + 1 !== movie.genres.length ? "•" : null}
                </Text>
            ))}
        </View>

        <Text style={styles.description}>{movie?.overview}</Text>
    </View>
);

export default MovieInfo

const styles = StyleSheet.create({
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
})