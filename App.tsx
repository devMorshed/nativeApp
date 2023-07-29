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

  const [searchText, setSearchText] = React.useState('');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* Greetings */}
          <View>
            <Text style={styles.greetings}>Good Morning</Text>
          </View>
          {/* Search Bar */}
          <View style={styles.search_bar}>
            <TextInput
              style={styles.search_input}
              onChangeText={setSearchText}
              value={searchText}
              inlineImageLeft="search"
              inlineImagePadding={40}
              placeholder="Search"
            />
          </View>

          <ScrollView style={styles.tutorialTab} horizontal>
            <View style={styles.tabItem}>
              <Text style={styles.tabText}>For You</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabText}>All</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabText}>Cardio</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabText}>Full Body</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabText}>Yoga</Text>
            </View>
          </ScrollView>

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

  greetings: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '600',
    paddingVertical: 24,
    color: '#efefef',
  },

  search_bar: {},

  search_input: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  tutorialTab: {
    marginVertical: 24,
  },
  tabItem: {
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    marginRight: 12,
  },
  tabText: {
    color: '#616161',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    height: 36,
    width: 74,
    padding: 10,
  },
  tutorial_grid: {
    display: 'flex',
    marginVertical: 10,
    gap: 16,
  },
});

export default App;
