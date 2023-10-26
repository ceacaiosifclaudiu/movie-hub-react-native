import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../commonStyle';

const HeaderBack = ({ addToFavorite, favorite, setFavorite }: any) => {
    const nav = useNavigation();

    return (
        <SafeAreaView style={styles.header}>
            <TouchableOpacity
                onPress={() => nav.goBack()}
                style={styles.backButton}>
                <Image
                    style={styles.backIcon}
                    source={require('../assets/back.png')}
                />
            </TouchableOpacity>
            {addToFavorite && <TouchableOpacity
                onPress={() => {
                    setFavorite(!favorite)
                    addToFavorite();
                }
                }
                style={styles.favoriteButton}>
                <Image
                    style={styles.favoriteIcon}
                    source={
                        favorite
                            ? require('../assets/favoriteOrange.png')
                            : require('../assets/favoriteWhite.png')
                    }
                />
            </TouchableOpacity>}
        </SafeAreaView>
    )
}

export default HeaderBack

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        zIndex: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 35,
        height: 20,
    },
    backButton: {
        backgroundColor: theme.background,
        borderRadius: 10,
        padding: 5,
        marginLeft: 10,
    },
    backIcon: {
        width: 25,
        height: 25,
    },
    favoriteButton: {
        borderRadius: 10,
        padding: 5,
        marginRight: 10,
    },
    favoriteIcon: {
        width: 35,
        height: 35,
    },

})