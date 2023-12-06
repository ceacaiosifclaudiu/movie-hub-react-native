import React from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { lightGray, secondaryTextColor, whiteTextColor } from '../../commonStyle'

interface SearchInputProps {
    handleSearch: (value: string) => Promise<void>,
    navigation: any
}

const SearchInput = ({ handleSearch, navigation }: SearchInputProps) => {
    return <View style={styles.searchContainer}>
        <TextInput
            placeholder='Search Movie'
            onChangeText={handleSearch}
            placeholderTextColor={'lightgray'}
            style={styles.searchInput}
        />
        <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.closeButton}
        >
            <Image
                style={styles.closeButtonIcon}
                source={require('../../assets/close.png')} />
        </TouchableOpacity>
    </View>
}

export default SearchInput

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: secondaryTextColor,
        borderRadius: 100,
        marginHorizontal: 10,
        marginBottom: 12,
    },
    searchInput: {
        flex: 1,
        padding: 4,
        paddingLeft: 24,
        color: whiteTextColor,
    },
    closeButton: {
        padding: 12,
        margin: 4,
        backgroundColor: lightGray,
        borderRadius: 25,
    },
    closeButtonIcon: {
        width: 23,
        height: 23,
    },
})