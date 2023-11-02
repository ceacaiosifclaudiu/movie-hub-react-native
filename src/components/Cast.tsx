import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { secondaryTextColor, whiteTextColor } from '../commonStyle';
import { CastDetail, Nav, Person } from '../types/types';
import { fallbackPersonImage } from '../api/MovieDB';

const CastItem = ({ cast, nav }: { cast: CastDetail, nav: Nav }) => {
    const { character, name, profile_path, cast_id } = cast;

    const openPersonScreen = () => {
        nav.navigate('Person', cast);
    };

    return (
        <TouchableOpacity
            key={cast_id}
            onPress={openPersonScreen}
            style={styles.castItem}>
            <View style={styles.imageContainer}>
                {profile_path ? (
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w185${profile_path}` || fallbackPersonImage }}
                        style={styles.image}
                    />
                ) : (
                    <View style={styles.image}>
                        <Text>No Image</Text>
                    </View>
                )}
            </View>
            <Text style={styles.characterName}>
                {character?.length > 10 ? `${character.slice(0, 10)}...` : character}
            </Text>
            <Text style={styles.personName}>
                {name?.length > 10 ? `${name.slice(0, 10)}...` : name}
            </Text>
        </TouchableOpacity>
    );
};

const Cast = ({ cast, nav, title }: { cast: Person[], nav: Nav, title?: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title ? title : "Top Cast"}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {cast && cast.map((castItem: any, index: number) => (
                    <CastItem key={index} cast={castItem} nav={nav} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        color: whiteTextColor,
        fontSize: 20,
        marginBottom: 20,
        paddingLeft: 10,
    },
    scrollContainer: {
        paddingHorizontal: 15,
    },
    castItem: {
        marginRight: 15,
        height: 'auto',
        alignItems: 'center',
    },
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: secondaryTextColor,
        width: 80,
    },
    image: {
        width: '100%',
        height: 80,
    },
    characterName: {
        color: whiteTextColor,
        fontSize: 13,
    },
    personName: {
        color: secondaryTextColor,
        fontSize: 13,
    },
});

export default Cast;
