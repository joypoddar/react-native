// Dishdetail
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";

// function RenderDish(props) {
//   const dish = props.dish;

//   if (dish != null) {
//     return (
//       <Card featuredTitle={dish.name} image={require("./images/alberto.png")}>
//         <Text style={{ margin: 10 }}>{dish.description}</Text>
//       </Card>
//     );
//   } else {
//     return <View></View>;
//   }
// }

function RenderDish(props) {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Image source={require("./images/alberto.png")} />
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  static navigationOptions = {
    title: "Dish Details",
  };

  render() {
    // const dishId = this.props.navigation.getParam("dishId", "");
    const dishId = this.props.route.params.dishId;

    return <RenderDish dish={this.state.dishes[+dishId]} />; // + turns the string into a number
  }
}

export default Dishdetail;
