import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>CIS 340 Student!</Text>
      <Text style={styles.largGreen}>Go RAMS!</Text>
      <Text style={[styles.yellow, styles.largGreen]}>Yellow text, then big green text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60
  },

  largGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 24
  },

  yellow: {
    color: 'yellow',
    fontSize: 48
  }
});
