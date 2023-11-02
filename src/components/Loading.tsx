import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { theme } from '../commonStyle';

var { width, height } = Dimensions.get('window');

const Loading = () => {
    return (
        <View
            style={styles.container}
        >
            <Progress.CircleSnail
                thickness={12}
                size={160}
                color={theme.background} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})