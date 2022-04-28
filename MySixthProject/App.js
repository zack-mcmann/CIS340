import react from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/16:9/w_2000,h_1125,c_limit/Transpo_G70_TA-518126.jpg",
    width: 80,
    height: 80
  };




  return (
    <View style={styles.container}>
      
      <ImageBackground source={csuLogo} style={styles.image}>
        <Text style={styles.text}>This is text over an image.</Text>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: "red",
    fontSize: 50,
    fontWeight: 'bold'
  }
});
