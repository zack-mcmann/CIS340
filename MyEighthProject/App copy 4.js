import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// the 'as' keyword adds an alias to the added package

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Please allow camera use.");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled) return;

    setSelectedImage({localUri: pickupResult.uri});

  }

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{uri: selectedImage.localUri}}/>
      </View>
    )
  }

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
        onPress={openImagePickerAsync}>
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
