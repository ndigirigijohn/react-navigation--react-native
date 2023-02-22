import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const {useRoute} = require('@react-navigation/native');

const ForgotPassword = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
      <Text>Params: {route.params.userId}</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
