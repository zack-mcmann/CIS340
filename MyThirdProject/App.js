import React, {useState} from 'react';
import { Text, TextInput, View, Button } from 'react-native';

function TV(props) {

  const [isOff, setIsOff] = useState(true);

  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "OFF" : "ON"}
      </Text>

      <Button 
        onPress={() => {
          setIsOff(false);
        }}

        disabled={!isOff}
        title={isOff ? "Turn me on please!" : "Thank you!"}
      />
    </View>
  );
}

export default function TVApp() {
  return (
    <View>
      <TV name="LG"/>
      <TV name="Samsung"/>
      <TV name="Sack"/>
    </View>
  );
}