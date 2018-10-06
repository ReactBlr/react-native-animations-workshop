import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LONG_PRESS_DELAY = 500;

function getLocationFromTouch(touch) {
  if (!touch) {
    return null;
  }
  return { pageX: touch.pageX, pageY: touch.pageY };
}

function getLocationForThreeFingers(touches) {
  const threeTouches = touches.slice(0, 3);
  return threeTouches.map(getLocationFromTouch);
}

class Button extends React.Component {
  state = {
    backgroundColor: "#ccc",
    pressInLocations: null
  };
  grant = e => {};
  gestureStart = pressInLocations => {
    this.setState({
      backgroundColor: "red",
      pressInLocations
    });
    this.longPressTimeout =
      this.props.onLongPress &&
      setTimeout(this.props.onLongPress, LONG_PRESS_DELAY);
  };
  distanceBetweenTwoPoints(point1, point2) {
    if (!(point1 && point2)) {
      return null;
    }
    const deltaX = point1.pageX - point2.pageX;
    const deltaY = point1.pageY - point2.pageY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  move = e => {
    const { pressInLocations } = this.state;
    const touches = e.nativeEvent.touches.slice(0, 3);
    if (touches.length === 3 && !pressInLocations) {
      this.gestureStart(getLocationForThreeFingers(touches));
      return;
    }

    if (touches.length < 3) {
      this.longPressTimeout && clearTimeout(this.longPressTimeout);
      return;
    }

    const distances = pressInLocations.map((pressInLocation, index) =>
      this.distanceBetweenTwoPoints(
        pressInLocation,
        getLocationFromTouch(touches[index])
      )
    );
    if (distances.some(distance => distance > 30)) {
      this.longPressTimeout && clearTimeout(this.longPressTimeout);
    }
  };
  release = e => {
    this.setState({
      backgroundColor: "#ccc",
      pressInLocations: null
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
  return (
    <Button
      onLongPress={() => console.log("three finger long press activated")}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    padding: 200
  }
});
