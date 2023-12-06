import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { secondaryTextColor } from '../../commonStyle';

const Biography = ({ biography }: { biography: string }) => (
    <View style={{
        padding: 16,
    }}>
        <Text style={styles.biography}>Biography</Text>
        <Text style={styles.biographyText}>
            {biography || 'N/A'}
        </Text>
    </View>
);

export default Biography

const styles = StyleSheet.create({
    biography: {
        color: 'white',
        fontSize: 16,
    },
    biographyText: {
        color: secondaryTextColor,
    },
})