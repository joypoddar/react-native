// Menu Component
import React, { Component } from "react";
import { Avatar, ListItem } from "react-native-elements";
import { DISHES } from "../shared/dishes";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  static navigationOptions = {
    title: "Menu",
  };

  render() {
    const { navigate } = this.props.navigation;
    const dishes = this.state.dishes;
    return dishes.map((item, index) => {
      return (
        <ListItem
          key={index}
          onPress={() => navigate("Dishdetail", { dishId: item.id })}
        >
          <Avatar rounded source={require("./images/alberto.png")} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    });
  }
}

export default Menu;
