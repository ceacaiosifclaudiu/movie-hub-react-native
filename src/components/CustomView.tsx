import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { customGray, secondaryTextColor, whiteTextColor } from '../commonStyle';

interface CustomViewProps {
    title: string;
    content: string;
}

const CustomView: React.FC<CustomViewProps> = ({ title, content }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightWidth: 2,
        borderRightColor: secondaryTextColor,
        alignItems: 'center',
    },
    title: {
        color: whiteTextColor,
        fontWeight: '700',
    },
    content: {
        color: customGray,
        fontWeight: '400',
        fontSize: 16,
    },
});

export default CustomView;
