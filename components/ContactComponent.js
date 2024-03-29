import React, { Component } from "react";
import { Card, Button, Icon } from "react-native-elements";
import { Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";

// import { MailComposer } from "expo";
import * as MailComposer from "expo-mail-composer";
class Contact extends Component {
  sendMail() {
    MailComposer.composeAsync({
      recipients: ["confusion@food.net"],
      subject: "Enquiry",
      body: "To whom it may concern:",
    });
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider />
            <Text>121, Clear Water Bay Road</Text>
            <Text>Clear Water Bay, Kowloon</Text>
            <Text>HONG KONG</Text>
            <Text>Tel: +852 1234 5678</Text>
            <Text>Fax: +852 8765 4321</Text>
            <Text>Email:confusion@food.net</Text>
            <Button
              title=" Send Email"
              buttonStyle={{ backgroundColor: "#512DA8", margin: 10 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="white"
                  size={15}
                />
              }
              onPress={this.sendMail}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
