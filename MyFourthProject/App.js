import React from 'react';
import { Text, SectionList, View } from 'react-native';

export default StatesApp = () => {

    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <SectionList
        sections={[
          {title: 'A', data: ['Alabama', 'Alaska', 'Arizona']},
          {title: 'C', data: ['California', 'Colorado', 'Connecticut']}
        ]}
        renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}>{item}</Text>}
        renderSectionHeader={({section}) => 
          <Text style={{
            paddingTop: 40, 
            paddingLeft: 40,
            fontSize: 14,
            fontWeight: 'bold'
          }}>
            {section.title}
          </Text>}
          keyExtractor={(item,index) => index}
        /> // You can continue with more sections
      </View>
    );

  }
