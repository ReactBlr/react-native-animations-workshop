import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Move extends React.Component {
  state = { outerBackgroundColor: "blue", innerBackgroundColor: "grey" };
  render() {
    const { outerBackgroundColor, innerBackgroundColor } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={[styles.outerView, { backgroundColor: outerBackgroundColor }]}
          onStartShouldSetResponder={evt => true}
          onMoveShouldSetResponder={evt => true}
          onResponderGrant={evt =>
            this.setState({
              outerBackgroundColor: "green"
            })
          }
          onResponderRelease={evt =>
            this.setState({
              outerBackgroundColor: "blue"
            })
          }
        >
          <View
            style={[
              styles.innerView,
              { backgroundColor: innerBackgroundColor, zIndex: 10 }
            ]}
            onStartShouldSetResponder={evt => true}
            onResponderGrant={evt =>
              this.setState({ innerBackgroundColor: "red" })
            }
            onResponderRelease={evt =>
              this.setState({
                innerBackgroundColor: "grey"
              })
            }
          />
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
  outerView: {
    padding: 100
  },
  innerView: {
    padding: 50
  }
});
