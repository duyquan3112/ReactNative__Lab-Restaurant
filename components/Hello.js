import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 40,
      weight: 60
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ margin: 50 }}>Hello world!</Text>
        <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>My name is {this.props.name}</Text>
        <Text style={{ color: 'red' }}>Im {this.state.age} years old </Text>
        <Text style={{ backgroundColor: 'cyan' }}>and my weight is {this.state.weight} kg</Text>
        <View style={{ margin: 50 }}>
          <Button title='NEXT YEAR' onPress={() => this.onPressNextYear()} />
        </View>
      </View>
    );
  }
  onPressNextYear() {
    var curAge = this.state.age;
    var curWeight = this.state.weight;
    this.setState({
      age: curAge + 1,
      weight: curWeight + 2
    });
  }
}
export default Hello;