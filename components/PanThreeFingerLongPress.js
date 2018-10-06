import React from "react";
import { View, Text, StyleSheet, PanResponder } from "react-native";

const LONG_PRESS_DELAY = 500;

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "#ccc"
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: e => e.nativeEvent.touches.length === 3,
      onPanResponderGrant: (e, gesture) => {
        this.setState({
          backgroundColor: "red"
        });
        this.longPressTimeout =
          this.props.onLongPress &&
          setTimeout(this.props.onLongPress, LONG_PRESS_DELAY);
      },
      onPanResponderMove: (e, gesture) => {
        const touches = e.nativeEvent.touches.slice(0, 3);
        const { dx, dy } = gesture;
        if (touches.length !== 3 || Math.abs(dx) > 20 || Math.abs(dy) > 20) {
          this.longPressTimeout && clearTimeout(this.longPressTimeout);
        }
      },
      onPanResponderRelease: (e, gesture) => {
        this.setState({
          backgroundColor: "#ccc",
          pressInLocations: null
        });
        clearTimeout(this.longPressTimeout);
      }
    });
  }
  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={[styles.button, { backgroundColor }]}
          {...this.panResponder.panHandlers}
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
