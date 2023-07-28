import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import TutorialCard from './components/TutorialCard';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.tutorial_grid}>
            <TutorialCard
              tutorialImage={require('./assets/images/workout.png')}
            />
            <TutorialCard
              tutorialImage={require('./assets/images/workout2.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C23',
    minHeight: 800,
  },
  lightMode: {
    color: 'black',
  },
  darkMode: {
    color: 'white',
  },
  tutorial_grid: {
    display: 'flex',
    gap: 5,
    marginVertical: 10,
  },
});

export default App;
