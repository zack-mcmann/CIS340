import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={[styles.container, {width: 40, height: 40, backgroundColor: 'red'}]}></View>
      <View style={[styles.flexible, {width: 40, height: 40, backgroundColor: 'blue'}]}></View>
      <View style={{width: 40, height: 40, backgroundColor: 'green'}}></View>
      <View style={{width: 40, height: 40, backgroundColor: 'yellow'}}></View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 100,
    paddingTop: 50,
    zIndex: 0
  },

  flexible: {
    flex: 1,
    position: 'absolute',
    zIndex: 1
  }
});
