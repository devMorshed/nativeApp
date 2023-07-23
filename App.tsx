import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkMode : styles.lightMode}>
        Hello There. I am a Mobile Application now.
      </Text>
    </View>
  );
};

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

export default App;
