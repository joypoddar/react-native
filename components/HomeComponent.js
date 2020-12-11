import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
// import { DISHES } from "../shared/dishes";
// import { LEADERS } from "../shared/leaders";
// import { PROMOTIONS } from "../shared/promotions";

import { connect } from "react-redux";
import { baseURL } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

function RenderItems(props) {
  const item = props.item;

  if (item != null) {
    return (
      <Card>
        <Card.Title>{item.name}</Card.Title>
        {/* <Card.FeaturedTitle>{item.name}</Card.FeaturedTitle> */}
        <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
        <Card.Image source={{ uri: baseURL + item.image }} />
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <RenderItems
          item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        />
        <RenderItems
          item={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
        />
        <RenderItems
          item={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);
