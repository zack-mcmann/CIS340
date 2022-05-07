import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const onTap = () => setCount(count => count + 1);

  return (
    <View style={styles.container}>

      <Image
        source={{uri: './assets/icon.png'}}
        style={styles.logo}
      />

      <Text style={styles.insts}>
        Hello there!
      </Text>

      <View style={styles.counterText}>
        <Text>Tap Counter: {count}</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => alert("You have not selected an image yet.")}>
          <Text style={styles.insts}>Touch me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10
  },

  counterText: {
    alignItems: 'center',
    padding: 10
  },

  logo: {
    alignItems: 'center',
    width: 300,
    height: 400,
    marginBottom: 40
  },

  insts: {
    fontSize: 24,
    color: 'blue',
    margin: 50
  }
});
