import React from 'react';
import {Text, View, StyleSheet, useColorScheme} from 'react-native';

function NewComponent() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkMode : styles.lightMode}>Bleh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightMode: {
    color: 'black',
  },
  darkMode: {
    color: 'white',
  },
});

export default NewComponent;
