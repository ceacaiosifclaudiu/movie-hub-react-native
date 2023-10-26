import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { stylesTheme, whiteTextColor } from '../commonStyle';


const HeaderHomeScreen = () => {
    const nav: NavigationProp<ParamListBase> = useNavigation();

    const openDrawer = () => {
        nav.openDrawer();
    };

    return (
        <SafeAreaView>
            <View>
                <StatusBar translucent={true} barStyle="light-content" backgroundColor={"transparent"} />
                <View style={styles.header}>
                    <TouchableOpacity onPress={openDrawer} activeOpacity={0.8}>
                        <Image source={require('../assets/menu.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}><Text style={[stylesTheme.text, {
                        fontSize: 28,
                        fontWeight: '700'
                    }]}>Movie</Text>Finder</Text>
                    <TouchableOpacity
                        onPress={() => nav.navigate('Search')}
                        activeOpacity={0.8}>
                        <Image
                            style={styles.searchIcon}
                            source={require('../assets/search.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HeaderHomeScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    title: {
        color: whiteTextColor,
        fontSize: 24,
        fontWeight: '700',
    },
    titleText: {
        fontSize: 28,
    },
    searchIcon: {
        width: 30,
        height: 30,
    },
})