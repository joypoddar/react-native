import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

function RenderItems(props) {
  const item = props.item;

  if (item != null) {
    return (
      <Card
        featuredTitle={item.name}
        featuredSubtitle={item.designation}
        image={require("./images/uthappizza.png")}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <RenderItems
          item={this.state.dishes.filter((dish) => dish.featured)[0]}
        />
        <RenderItems
          item={this.state.promotions.filter((promo) => promo.featured)[0]}
        />
        <RenderItems
          item={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default Home;