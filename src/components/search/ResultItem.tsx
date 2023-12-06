import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { fallbackMoviePoster, image185 } from '../../api/MovieDB';
import { lightGray } from '../../commonStyle';
import { Results } from '../../types/types';

interface ResultItemProps {
  item: Results,
  onPress: () => void
}

var { width, height } = Dimensions.get('window');

const ResultItem = ({ item, onPress }: ResultItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.resultItem}>
      <Image
        style={styles.resultImage}
        source={{ uri: image185(item?.poster_path) || fallbackMoviePoster }}
      />
      <Text style={styles.resultTitle}>
        {item?.title.length > 22 ? item?.title.slice(0, 21) + '...' : item?.title}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  resultItem: {
    marginVertical: 8,
  },
  resultImage: {
    width: width * 0.44,
    height: height * 0.3,
    borderRadius: 20,
  },
  resultTitle: {
    color: lightGray,
    marginLeft: 4,
  },
});

export default ResultItem;
