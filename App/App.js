import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";
import Weather from "./src/Components/Weather";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Weather />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  statusBar: {
    backgroundColor: "#8ba892",
    height: Constants.statusBarHeight
  }
});
