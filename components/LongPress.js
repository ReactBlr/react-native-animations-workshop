import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LONG_PRESS_DELAY = 500;

class Button extends React.Component {
  state = {
    backgroundColor: "#ccc",
    pressInLocation: {}
  };
  grant = e => {
    this.setState({
      backgroundColor: "red",
      pressInLocation: {
        pageX: e.nativeEvent.pageX,
        pageY: e.nativeEvent.pageY
      }
    });
    this.longPressTimeout =
      this.props.onLongPress &&
      setTimeout(this.props.onLongPress, LONG_PRESS_DELAY);
  };
  distanceBetweenTwoPoints(aX, aY, bX, bY) {
    const deltaX = aX - bX;
    const deltaY = aY - bY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  move = e => {
    const { pressInLocation } = this.state;
    const distance = this.distanceBetweenTwoPoints(
      pressInLocation.pageX,
      pressInLocation.pageY,
      e.nativeEvent.pageX,
      e.nativeEvent.pageY
    );
    if (distance > 10) {
      clearTimeout(this.longPressTimeout);
    }
  };
  release = e => {
    this.setState({
      backgroundColor: "#ccc"
    });
    clearTimeout(this.longPressTimeout);
  };
  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={[styles.button, { backgroundColor }]}
          onStartShouldSetResponder={evt => true}
          onResponderGrant={this.grant}
          onResponderMove={this.move}
          onResponderRelease={this.release}
        >
          <Text>Hello</Text>
        </View>
      </View>
    );
  }
}

export default function LongPressExample() {
  return <Button onLongPress={() => console.log("long press activated")} />;
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
