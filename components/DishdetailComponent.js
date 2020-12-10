// Dishdetail
import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/dishes";

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

function RenderComments(props) {
  const comments = props.comments;
  return (
    <Card>
      <Card.Title>{"Comments"}</Card.Title>
      {comments.map((item, index) => {
        return (
          <View key={index} style={{ margin: 10 }}>
            <Text style={{ fontSize: 14 }}>{item.comment}</Text>
            <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
            <Text style={{ fontSize: 12 }}>
              {"-- " + item.author + ", " + item.date}
            </Text>
          </View>
        );
      })}
    </Card>
  );
}

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
    };
  }

  static navigationOptions = {
    title: "Dish Details",
  };

  render() {
    const dishId = this.props.route.params.dishId;

    return (
      <ScrollView>
        <RenderDish dish={this.state.dishes[+dishId]} />
        <RenderComments
          comments={this.state.comments.filter(
            (comment) => comment.dishId === dishId
          )}
        />
      </ScrollView>
    );
  }
}

export default Dishdetail;
