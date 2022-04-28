import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {
  _onPressButton() {
    alert('You pressed a button');
  }

  render() {

  
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button
          onPress={this._onPressButton}
          title="Press me!"
        />
      </View>

      <View style={styles.containerLayoutButton}>
        <Button
          onPress={() => {
            alert("You pressed button 2!");
          }}
          title="Another button to press?"
        />

        <Button
          onPress={() => {
            alert("You pressed the last button!");
          }}
          title="And another after that!"
        />
      </View>

      <View style={styles.containerButton}>
        <Button
          onPress={() => {
            alert("You pressed the tap me button!");
          }}
          title="Tap me!"
          color="green"
        />
      </View>
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 25
  },

  containerLayoutButton: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
