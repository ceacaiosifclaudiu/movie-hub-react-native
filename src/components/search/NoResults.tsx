import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'

var { width } = Dimensions.get('window');

const NoResults = () => {
    return <View>
        <Image
            style={styles.noResultsImage}
            source={require("../../assets/images/movieTime.png")} />
    </View>
}

export default NoResults

const styles = StyleSheet.create({
    noResultsImage: {
        width: width,
        height: 400,
    },
})