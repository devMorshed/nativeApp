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

          {/* Reminder */}
          <View style={styles.reminder}>
            <View>
              <Text style={styles.reminderTitle}>
                You have to work the arm.
              </Text>
              <Text style={styles.reminderSubtitle}>
                Do you want to continue the program?
              </Text>
            </View>
            <View>
              <Text style={styles.reminderBtn}>Continue</Text>
            </View>
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
    marginVertical: 24,
    color: '#efefef',
  },
  reminder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#E23E57',
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginVertical: 24,
    borderRadius: 10,
  },

  reminderTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  reminderSubtitle: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#ffeeee',
  },
  reminderBtn: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '600',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    color: '#C94040',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
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
