import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'baseline'}}>
      <View style={{height: 50, backgroundColor: 'red', alignSelf: 'stretch'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
    </View>

  );
}
