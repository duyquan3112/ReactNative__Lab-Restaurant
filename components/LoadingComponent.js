import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <ActivityIndicator size='large' color='gray' />
        <Text style={{ color: 'gray', fontSize: 14, fontWeight: 'bold' }} >Loading ...</Text>
      </View>
    );
  }
}
export default Loading;