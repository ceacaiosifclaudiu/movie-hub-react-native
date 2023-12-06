import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backgroundColorSecondary } from '../commonStyle';
import HeaderBack from '../components/HeaderBack';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import Biography from '../components/person/Biography';
import InfoContainer from '../components/person/InfoContainer';
import PersonInfo from '../components/person/PersonInfo';
import ProfileImage from '../components/person/ProfileImage';
import usePersonData from '../hooks/usePersonData';
import { Item } from '../types/types';

const PersonScreen = () => {
  const { params: item } = useRoute();
  const typedItem = item as Item;

  const { loading, personMovies, personDetails, isFavorite, setFavorite, addToFavoritesActorHandler } = usePersonData(typedItem?.id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.containerHeader}>
        <HeaderBack addToFavorite={addToFavoritesActorHandler} favorite={isFavorite} setFavorite={setFavorite} />
      </SafeAreaView>

      {loading
        ? (
          <Loading />
        ) : (
          item
            ? (
              <View>
                <ProfileImage profilePath={personDetails?.profile_path} />
                <PersonInfo name={personDetails?.name} placeOfBirth={personDetails?.place_of_birth} />
                <InfoContainer
                  gender={personDetails?.gender}
                  birthday={personDetails?.birthday}
                  knownFor={personDetails?.known_for_department}
                  popularity={personDetails?.popularity}
                />
                <Biography biography={personDetails?.biography} />
                <MovieList title="Movies" hideSeeAll data={personMovies} />
              </View>
            )
            : null
        )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColorSecondary,
    minHeight: '100%',
  },
  containerHeader: {
    position: 'relative',
    paddingTop: 80,
  },
});

export default PersonScreen;
