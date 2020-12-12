import React, { Component } from "react";
import { Card, Avatar, ListItem } from "react-native-elements";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { baseURL } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    favorites: state.favorites,
  };
};

class Favorites extends Component {
  static navigationOptions = {
    title: "My Favorites",
  };

  render() {
    // const dishes = this.props.dishes.dishes;
    // const { navigate } = this.props.navigate;
    const dishes = this.props.dishes.dishes.filter((dish) =>
      this.props.favorites.some((el) => el === dish.id)
    );

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{this.props.dishes.errMsg}</Text>
          <Loading />
        </View>
      );
    } else {
      return (
        <ScrollView>
          <Card>
            {dishes.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onPress={() => navigate("Dishdetail", { dishId: item.id })}
                >
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

export default connect(mapStateToProps)(Favorites);
