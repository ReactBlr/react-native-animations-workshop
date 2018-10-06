import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Button extends React.Component {
  state = {
    backgroundColor: "#ccc"
  };
  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={[styles.button, { backgroundColor }]}
          onStartShouldSetResponder={evt => true}
          onResponderGrant={evt => this.setState({ backgroundColor: "red" })}
          onResponderRelease={evt =>
            this.setState({
              backgroundColor: "#ccc"
            })
          }
        >
          <Text>Hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    padding: 20
  }
});
