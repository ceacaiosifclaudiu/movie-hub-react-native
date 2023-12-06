import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'
import { fallbackPersonImage, image500 } from '../../api/MovieDB';
import { primaryColor, secondaryTextColor } from '../../commonStyle';

const { width, height } = Dimensions.get('window');

const ProfileImage = ({ profilePath }: { profilePath: string }) => (
  <View style={styles.profileImageAlign}>
    <View style={styles.profileImageContainer}>
      <Image
        source={{ uri: image500(profilePath) || fallbackPersonImage }}
        style={styles.profileImage}
      />
    </View>
  </View>
);

export default ProfileImage

const styles = StyleSheet.create({
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
})