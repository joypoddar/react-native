// Menu Component
import React, { Component } from "react";
import { Tile } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { baseURL } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
  };
};

class Menu extends Component {
  static navigationOptions = {
    title: "Menu",
  };

  render() {
    const { navigate } = this.props.navigation;
    const dishes = this.props.dishes.dishes;
    return (
      <ScrollView>
        {dishes.map((item, index) => {
          return (
            <Tile
              key={index}
              onPress={() => navigate("Dishdetail", { dishId: item.id })}
              title={item.name}
              caption={item.description}
              featured
              imageSrc={{ uri: baseURL + item.image }}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Menu);
