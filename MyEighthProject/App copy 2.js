import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MyApp extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  onTap = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const {count} = this.state;

  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
        <Text>Tap Counter: {count}</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={this.onTap}>
          <Text>Touch me!</Text>
      </TouchableOpacity>
    </View>
  );
  }
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
  }
});
