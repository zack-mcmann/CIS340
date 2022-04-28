import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

export default class MyApp extends Component {
  render() {

    let pic = {
      uri:"https://th.bing.com/th/id/R.f1ffadca868d2ffeea273ddbec8218fb?rik=huwCtldznSoknA&riu=http%3a%2f%2fimg.izismile.com%2fimg%2fimg3%2f20100711%2f640%2fbrilliant_pictures_640_46.jpg&ehk=9qrZbKjX9Lv6imVaLrGakhBJswnoZRdK792fLNlJAMQ%3d&risl=&pid=ImgRaw&r=0"
    }
  return (
    <View style={{
      padding: 60
    }}>
      
      <Text>Hello, I am here!</Text>
    </View>
  );
}
}
