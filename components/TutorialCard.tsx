import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TutorialCard({tutorialImage}) {
  return (
    <View style={styles.card}>
      <Image style={{width: '100%'}} source={tutorialImage} />
      <View style={styles.card_save}>
        {/* <Text>Hello</Text> */}
        <Image source={require('../assets/Icons/bookmark.png')} />
      </View>

      <View style={styles.card_footer}>
        <View>
          <Text style={styles.card_title}>Shoulder Work</Text>
          <View style={styles.card_subtitle}>
            <Text style={styles.card_subtitle_text}>10 minutes</Text>
            <Text style={styles.card_subtitle_text}>.</Text>
            <Text style={styles.card_subtitle_text}>Hard</Text>
          </View>
        </View>
        <View>
          <Text style={styles.card_btn}>Start</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#353542',
    borderRadius: 8,
    margin: 16,
    position: 'relative',
  },
  tutorial_image: {
    display: 'flex',
    alignItems: 'center',
  },
  card_save: {
    position: 'absolute',
    height: 32,
    width: 32,
    top: 10,
    right: 10,
    padding: 6,
    backgroundColor: '#424242',
    borderRadius: 20, 
  },

  card_title: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Lexend',
    fontWeight: '600',
    color: '#ffffff',
  },
  card_footer: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card_btn: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Lexend',
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    backgroundColor: '#C94040',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  card_subtitle: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  card_subtitle_text: {
    color: '#757575',
    fontSize: 16,
  },
});
