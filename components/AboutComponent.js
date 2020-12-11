import React, { Component } from "react";
import { Card } from "react-native-elements";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseURL } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
  };
};

function History() {
  return (
    <Card>
      <Card.Title>Our History</Card.Title>
      <Card.Divider />
      <Text>
        Started in 2010, Ristorante con Fusion quickly established itself as a
        culinary icon par excellence in Hong Kong. With its unique brand of
        world fusion cuisine that can be found nowhere else, it enjoys patronage
        from the A-list clientele in Hong Kong. Featuring four of the best
        three-star Michelin chefs in the world, you never know what will arrive
        on your plate the next time you visit us.
      </Text>
      <Text>
        The restaurant traces its humble beginnings to The Frying Pan, a
        successful chain started by our CEO, Mr. Peter Pan, that featured for
        the first time the world's best cuisines in a pan.
      </Text>
    </Card>
  );
}

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };
  render() {
    const leaders = this.props.leaders.leaders;

    if (this.props.leaders.isLoading) {
      return (
        <ScrollView>
          <History />
          <Card>
            <Card.Title>Corporate Leadership</Card.Title>
            <Loading />
          </Card>
        </ScrollView>
      );
    } else if (this.props.leaders.errMess) {
      return (
        <ScrollView>
          <History />
          <Card>
            <Card.Title>{this.props.leaders.errMsg}</Card.Title>
            <Loading />
          </Card>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <History />
          <Card>
            <Card.Title>Corporate Leadership</Card.Title>
            <Card.Divider />
            {leaders.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Avatar rounded source={{ uri: baseURL + item.image }} />
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              );
            })}
          </Card>
        </ScrollView>
      );
    }
  }
}

export default connect(mapStateToProps)(About);
