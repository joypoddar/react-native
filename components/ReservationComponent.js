import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Button,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Moment from "moment";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: 1,
      smoking: false,
      date: new Date(),
      mode: "date",
      show: false,
    };
  }

  static navigationOptions = {
    title: "Reserve Table",
  };

  resetForm() {
    this.setState({
      guests: 1,
      smoking: false,
      date: new Date(),
      show: false,
      mode: "date",
    });
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="zoomIn" duration={800} delay={1000}>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Number of Guests</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.guests}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ guests: itemValue })
              }
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
            <Switch
              style={styles.formItem}
              value={this.state.smoking}
              trackColor={{ false: "#767577", true: "#512DA8" }}
              onValueChange={(value) => this.setState({ smoking: value })}
            ></Switch>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Date and Time</Text>
            <TouchableOpacity
              style={styles.formItem}
              style={{
                padding: 7,
                borderColor: "#512DA8",
                borderWidth: 2,
                flexDirection: "row",
              }}
              onPress={() => this.setState({ show: true, mode: "date" })}
            >
              <Icon type="font-awesome" name="calendar" color="#512DA8" />
              <Text>
                {" " + Moment(this.state.date).format("DD-MMM-YYYY h:mm A")}
              </Text>
            </TouchableOpacity>
            {this.state.show && (
              <DateTimePicker
                value={this.state.date}
                mode={this.state.mode}
                minimumDate={new Date()}
                minuteInterval={30}
                onChange={(event, date) => {
                  if (date === undefined) {
                    this.setState({ showDTPicker: false });
                  } else {
                    this.setState({
                      showDTPicker: this.state.mode === "time" ? false : true,
                      mode: "time",
                      date: new Date(date),
                    });
                  }
                }}
              />
            )}
          </View>
          <View style={styles.formRow}>
            <Button
              onPress={() => {
                Alert.alert(
                  "Your Reservation",
                  `Number of ${this.state.guests <= 1 ? "Guest" : "Guests"}: ${
                    this.state.guests
                  } \nSmoking: ${
                    this.state.smoking ? "Yes" : "No"
                  } \nDate and Time: ${Moment(this.state.date).format(
                    "ddd DD/MM h:mm A"
                  )}`,
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                      onPress: () => this.resetForm(),
                    },
                    { text: "Ok", onPress: () => this.resetForm() },
                  ]
                );
              }}
              title="Reserve"
              color="#512DA8"
              accessibilityLabel="Learn more about this purple button"
            ></Button>
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#512DA8",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default Reservation;
