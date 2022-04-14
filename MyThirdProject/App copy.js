import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>My name is {props.name}! I am a CIS 340 student!</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Welcome to CIS 340</Text>
      <Student name="Zack"/>
      <Student name="Jack"/>
      <Student name="Sack"/>
    </View>
  );
}