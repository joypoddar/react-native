import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { connect } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import * as Animatable from "react-native-animatable";
import { Loading } from "./LoadingComponent";
import { baseURL } from "../shared/baseUrl";
import { deleteFavorite } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId)),
});

class Favorites extends Component {
  static navigationOptions = {
    title: "My Favorites",
  };

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => {
      return (
        <Animatable.View animation="fadeInRightBig" duration={2000}>
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
        </Animatable.View>
      );
    };

    const renderHiddenItem = ({ item, rowMap }) => (
      <TouchableOpacity
        style={styles.swipeButtonRight}
        onPress={() => {
          Alert.alert(
            "Delete Forever ?",
            "Are you sure you wish to delete " + item.name + "?",
            [
              { text: "Cancel", style: "cancel" },
              { text: "Ok", onPress: () => this.props.deleteFavorite(item.id) },
            ],
            { cancelable: false }
          );
        }}
      >
        <Text style={{ color: "#FFF" }}>DELETE</Text>
      </TouchableOpacity>
    );

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{this.props.dishes.errMess}</Text>
        </View>
      );
    } else {
      return (
        <SwipeListView
          useFlatList={true}
          data={this.props.dishes.dishes.filter((dish) =>
            this.props.favorites.some((el) => el === dish.id)
          )}
          renderItem={renderMenuItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-80}
          stopRightSwipe={-80}
          disableRightSwipe
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  swipeButtonRight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0800",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
