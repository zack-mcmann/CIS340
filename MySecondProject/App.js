import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';

export default function App() {


  return (
    <View>

      <Text>
        {"\n\n\n\n\n\n\n"}
        CIS 340 Student!
      </Text>

      <TextInput 
      style={{
        height: 40,
        width: 300,
        borderColor: "blue",
        borderWidth: 2,
      }}
      defaultValue="Enter Input"
      />
      
    </View>
  );
}

