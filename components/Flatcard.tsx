import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Flatcard() {
  return (
    <View style={styles.container}>
      <View style={styles.flatcard}>
        <Text style={styles.headingText}> One.</Text>
      </View>
      <View style={styles.flatcard}>
        <Text style={styles.headingText}> two.</Text>
      </View>
      <View style={styles.flatcard}>
        <Text style={styles.headingText}> three.</Text>
      </View>
      <View style={styles.flatcard}>
        <Text style={styles.headingText}> four.</Text>
      </View>
      <View style={styles.flatcard}>
        <Text style={styles.headingText}> five </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    width: 370,
    gap: 10,
    flexWrap: 'wrap',
    borderColor: 'black',
    borderWidth: 4,
    padding: 10,
    backgroundColor: '#40404040',
  },
  flatcard: {
    backgroundColor: '#efefef',
    height: 100,
    width: 100,
  },
  headingText: {
    fontSize: 15,
    color: '#000',
  },
});
