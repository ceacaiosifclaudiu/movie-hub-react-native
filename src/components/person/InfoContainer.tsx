import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { darkGray, whiteTextColor } from '../../commonStyle';
import CustomView from '../CustomView';

const { width } = Dimensions.get('window');

const InfoContainer = ({ gender, birthday, knownFor, popularity }: any) => (
    <View style={styles.infoContainer}>
        <CustomView title="Gender" content={gender === 1 ? 'Female' : 'Male'} />
        <CustomView title="Birthday" content={birthday} />
        <CustomView title="Known for" content={knownFor} />
        <View style={{
            flex: 1,
            paddingHorizontal: 8,
            alignItems: 'center',
        }}>
            <Text style={styles.infoTitle}>Popularity</Text>
            <Text style={styles.infoContent}>
                {popularity?.toFixed(2)} %
            </Text>
        </View>
    </View>
);

export default InfoContainer

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: darkGray,
        borderRadius: width,
        marginHorizontal: 12,
        marginTop: 20,
        paddingVertical: 16,
    },
    infoTitle: {
        color: whiteTextColor,
        fontWeight: '700',
    },
    infoContent: {
        color: '#D4D4D4',
        fontWeight: '400',
    },
})