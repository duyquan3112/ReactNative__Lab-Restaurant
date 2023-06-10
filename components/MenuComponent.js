import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
//import Dishdetail from './DishdetailComponent';
//import { DISHES } from '../shared/dishes';
import { baseUrl } from "../shared/baseUrl";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
  };
};

class Menu extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   //selectedDish: null,
    //   dishes: DISHES
    // };
  }
  render() {
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return <Text>{this.props.errMess}</Text>;
    } else {
      return (
        //<View style={{ flex: 1 }}>
        <FlatList
          data={this.props.dishes.dishes}
          renderItem={({ item, index }) => this.renderMenuItem(item, index)}
          keyExtractor={(item) => item.id.toString()}
        />
        //<Dishdetail dish={this.state.selectedDish} />
        //</View>
      );
    }
  }
  renderMenuItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <Animatable.View animation="fadeInRightBig" duration={2000}>
        <ListItem
          key={index}
          onPress={() => navigate("Dishdetail", { dishId: item.id })}
        >
          <Avatar source={{ uri: baseUrl + item.image }} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </Animatable.View>
    );
  }
  /*onDishSelect(item) {
    this.setState({ selectedDish: item });
  }*/
}
export default connect(mapStateToProps)(Menu);
