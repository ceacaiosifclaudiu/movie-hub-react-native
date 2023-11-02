import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fallbackMoviePoster, image500 } from '../api/MovieDB';
import { whiteTextColor } from '../commonStyle';
import { Movie, Nav } from '../types/types';

const TrendingMovies = ({ trending }: { trending: Movie[] }) => {
    const nav: Nav = useNavigation();

    return (
        <View>
            <Text style={styles.title}>Trending</Text>
            <FlatList
                data={trending}
                horizontal
                contentContainerStyle={styles.flatListContent}
                decelerationRate={0}
                bounces={false}
                snapToInterval={180}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => nav.navigate("Movie", item)}
                            key={item.id}
                            activeOpacity={0.9}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: image500(item.poster_path) || fallbackMoviePoster }} />
                        </TouchableOpacity>
                    )
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
    },
    title: {
        color: whiteTextColor,
        fontSize: 18,
        margin: 12
    },
    flatListContent: {
        gap: 10,
    },
    movieImage: {
        borderRadius: 20,
        width: Dimensions.get('window').width * 0.65,
        height: Dimensions.get('window').height * 0.44,
        objectFit: 'cover'
    },
});

export default TrendingMovies

