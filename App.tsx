import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

import TutorialCard from './components/TutorialCard';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const [searchText, setSearchText] = React.useState('Search');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* Search Bar */}

          <View style={styles.search_bar}>
            <TextInput
              style={styles.search_input}
              onChangeText={setSearchText}
              value={searchText}
              inlineImageLeft="search"
              inlineImagePadding={40}
            />
          </View>

          {/* Tutorial Card Section */}
          <View style={styles.tutorial_grid}>
            <TutorialCard
              tutorialImage={require('./assets/images/workout.png')}
            />
            <TutorialCard
              tutorialImage={require('./assets/images/workout2.png')}
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
    // minHeight: 765,
    padding: 16,
  },
  lightMode: {
    color: 'black',
  },
  darkMode: {
    color: 'white',
  },

  search_bar: {},

  search_input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
  },
  tutorial_grid: {
    display: 'flex',
    marginVertical: 10,
    gap: 16,
  },
});

export default App;
