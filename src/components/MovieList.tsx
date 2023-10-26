import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { fallbackMoviePoster, image185 } from '../api/MovieDB';
import { whiteTextColor } from '../commonStyle';
import { Movie } from '../types/types';
import TitleSeeMore from './TitleSeeMore';

const MovieListItem = ({ item }: { item: Movie }) => {
    const nav: NavigationProp<ParamListBase> = useNavigation();
    const { id, poster_path, title } = item;

    return (
        <TouchableOpacity
            onPress={() => nav.push('Movie', item)}
            key={id}
            activeOpacity={0.9}>

            {poster_path ? <Image
                style={styles.image}
                source={{
                    uri: image185(poster_path) || fallbackMoviePoster
                }}
            /> : null}

            <Text style={styles.text}>
                {title?.length > 14 ? title?.slice(0, 14) + '...' : title}
            </Text>
        </TouchableOpacity>
    );
};

const MovieList = ({ data, title, hideSeeAll }: { data: Movie[], title: string, hideSeeAll?: boolean }) => {
    return (
        <View style={styles.container}>
            <TitleSeeMore title={title} hideSeeAll />
            <FlatList
                data={data}
                horizontal
                contentContainerStyle={styles.flatList}
                decelerationRate={0}
                bounces={false}
                snapToInterval={180}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <MovieListItem item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    flatList: {
        gap: 10,
        paddingHorizontal: 10
    },
    image: {
        borderRadius: 20,
        width: Dimensions.get('window').width * 0.31,
        height: Dimensions.get('window').height * 0.25,
    },
    text: {
        color: whiteTextColor,
        margin: 5,
    },
});

export default MovieList;
