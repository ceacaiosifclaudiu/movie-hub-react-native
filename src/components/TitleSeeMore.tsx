import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme, whiteTextColor } from '../commonStyle';

const TitleSeeMore = ({ title, hideSeeAll }: { title: string; hideSeeAll: boolean }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {!hideSeeAll && (
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: whiteTextColor,
    fontSize: 18,
    margin: 12,
  },
  seeAll: {
    color: theme.text,
    fontSize: 18,
    margin: 12,
  },
});

export default TitleSeeMore;
