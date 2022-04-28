import React from 'react';
import { Text, FlatList, View } from 'react-native';

export default StatesApp = () => {

    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <FlatList data={[
          {key: 'Alabama'},
          {key: 'Alaska'},
          {key: 'Colorado'}
        ]}
        returnItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}>{item.key}</Text>}
        />
      </View>
    );

  }
