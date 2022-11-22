import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ProfilePageViewProps {}

const ProfilePageView = (props: ProfilePageViewProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfilePageView</Text>
    </View>
  );
};

export default ProfilePageView;

const styles = StyleSheet.create({
  container: {},
});
