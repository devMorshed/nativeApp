import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Flatcard from './components/Flatcard';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={isDarkMode ? styles.darkMode : styles.lightMode}>
            Hello There.
          </Text>
          <Flatcard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  lightMode: {
    color: 'black',
  },
  darkMode: {
    color: 'white',
  },
});

export default App;
