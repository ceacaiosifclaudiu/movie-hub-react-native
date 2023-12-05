import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import {
  fallbackPersonImage,
  fetchPersonDetails,
  fetchPersonMovies,
  image500,
} from '../api/MovieDB';
import { backgroundColorSecondary, darkGray, primaryColor, secondaryTextColor, whiteTextColor } from '../commonStyle';
import CustomView from '../components/CustomView';
import HeaderBack from '../components/HeaderBack';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import { addFavoriteActor } from '../store/itemSlice';
import { Item, ItemsState, Person } from '../types/types';

const { width, height } = Dimensions.get('window');

const usePersonData = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const [personDetails, setPersonDetails] = useState<Person>({
    id: '',
    name: '',
    birthday: '',
    place_of_birth: '',
    profile_path: '',
    popularity: 0,
    biography: '',
    gender: 0,
    known_for_department: '',
  });
  const dispatch = useDispatch();
  const favoriteActors = useSelector((state: { favorites: ItemsState }) => state.favorites.favoriteActors);

  const boolean = favoriteActors?.some((actor: any) => actor.id === personDetails.id);
  const [isFavorite, setIsFavorite] = useState(boolean);

  const fetchData = async (id: number) => {
    setLoading(true);
    await Promise.all([getPersonDetail(id), getPersonMovies(id)]);
    setLoading(false);
  };

  const getPersonDetail = async (id: number) => {
    const data = await fetchPersonDetails(id);
    if (data) setPersonDetails(data);
  };

  const getPersonMovies = async (id: number) => {
    const data = await fetchPersonMovies(id);
    if (data) setPersonMovies(data.cast);
  };

  const addToFavoritesActorHandler = () => {
    if (personDetails) {
      dispatch(addFavoriteActor(personDetails));
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return {
    loading,
    personMovies,
    personDetails,
    isFavorite,
    setIsFavorite,
    addToFavoritesActorHandler,
  };
};

const PersonScreen = () => {
  const { params: item } = useRoute();
  const typedItem = item as Item;

  const { loading, personMovies, personDetails, isFavorite,setIsFavorite, addToFavoritesActorHandler } = usePersonData(typedItem?.id);

  const renderProfileImage = () => (
    <View style={styles.profileImageAlign}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: image500(personDetails.profile_path) || fallbackPersonImage }}
          style={styles.profileImage}
        />
      </View>
    </View>
  );

  const renderPersonInfo = () => (
    <View style={{ marginTop: 25 }}>
      <Text style={styles.personName}>{personDetails?.name}</Text>
      <Text style={styles.personBirthPlace}>{personDetails?.place_of_birth}</Text>
    </View>
  );

  const renderInfoContainer = () => (
    <View style={styles.infoContainer}>
      <CustomView
        title="Gender"
        content={personDetails?.gender === 1 ? 'Female' : 'Male'}
      />
      <CustomView title="Birthday" content={personDetails?.birthday} />
      <CustomView
        title="Known for"
        content={personDetails?.known_for_department}
      />
      <View style={{
        flex: 1,
        paddingHorizontal: 8,
        alignItems: 'center',
      }}>
        <Text style={styles.infoTitle}>Popularity</Text>
        <Text style={styles.infoContent}>
          {personDetails?.popularity?.toFixed(2)} %
        </Text>
      </View>
    </View>
  );

  const renderBiography = () => (
    <View style={{
      padding: 16,
    }}>
      <Text style={styles.biography}>Biography</Text>
      <Text style={styles.biographyText}>
        {personDetails?.biography || 'N/A'}
      </Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.containerHeader}>
        <HeaderBack addToFavorite={addToFavoritesActorHandler} favorite={isFavorite} setFavorite={setIsFavorite} />
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        item ? (
          <>
            {renderProfileImage()}
            {renderPersonInfo()}
            {renderInfoContainer()}
            {renderBiography()}
            <MovieList title="Movies" hideSeeAll data={personMovies} />
          </>
        ) : null
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
  profileImageAlign: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  profileImageContainer: {
    width: 288,
    height: height * 0.43,
    borderWidth: 2,
    borderColor: secondaryTextColor,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: width,
    shadowColor: primaryColor,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.00,
    elevation: 24,
  },
  profileImage: {
    width: width * 0.74,
    height: height * 0.43,
  },
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
  biography: {
    color: 'white',
    fontSize: 16,
  },
  biographyText: {
    color: secondaryTextColor,
  },
});

export default PersonScreen;
