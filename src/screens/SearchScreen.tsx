import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { backgroundColor, whiteTextColor } from '../commonStyle';
import Loading from '../components/Loading';
import NoResults from '../components/search/NoResults';
import ResultItem from '../components/search/ResultItem';
import SearchInput from '../components/search/SearchInput';
import useSearch from '../hooks/useSearch';
import { Results } from '../types/types';

var { width } = Dimensions.get('window');

const SearchScreen = ({ navigation }: any) => {
  const { loading, results, handleSearch } = useSearch();

  return (
    <View style={styles.container}>
      <SearchInput handleSearch={handleSearch} navigation={navigation} />

      {
        loading
          ?
          (
            <Loading />
          )
          : (
            results.length > 0 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.resultScrollView}
              >
                <Text style={styles.resultsText}>
                  Result ({results.length})
                </Text>
                <View style={styles.resultsContainer2}>
                  {
                    results.map((item: Results, index: number) => (
                      <ResultItem
                        key={index}
                        item={item}
                        onPress={() => navigation.push('Movie', item)}
                      />
                    ))}
                </View>
              </ScrollView>)
              : <NoResults />
          )
      }
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: StatusBar.currentHeight,
  },
  resultScrollView: {
    paddingHorizontal: 15,
    marginTop: 12,
  },
  resultsContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  resultsText: {
    color: whiteTextColor,
    fontWeight: '600',
  },
  noResultsImage: {
    width: width,
    height: 400,
  },
});

