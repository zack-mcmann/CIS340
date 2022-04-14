import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';

function App() {


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

export default function MultiComp() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'Center'
    }}>
      <Text>Welcome to my class.</Text>

      <App />
      <App />
      <App />
    </View>
  );
}