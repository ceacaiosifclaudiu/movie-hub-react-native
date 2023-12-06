import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { secondaryTextColor, whiteTextColor } from '../../commonStyle';

const PersonInfo = ({ name, placeOfBirth }: { name: string; placeOfBirth: string }) => (
    <View style={{ marginTop: 25 }}>
        <Text style={styles.personName}>{name}</Text>
        <Text style={styles.personBirthPlace}>{placeOfBirth}</Text>
    </View>
);

export default PersonInfo;

const styles = StyleSheet.create({
    personName: {
        color: whiteTextColor,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
    },
    personBirthPlace: {
        color: secondaryTextColor,
        fontSize: 16,
        textAlign: 'center',
    },
})