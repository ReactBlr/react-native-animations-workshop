import React, { Component, Fragment } from "react";
import { Text, View, Animated, Easing } from "react-native";
import { Font } from "expo";
import { createIconSetFromFontello } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import fontellConfig from "../../assets/fonts/config.json";
const Icon = createIconSetFromFontello(fontellConfig, "WeatherIcon");

const AnimatableIcon = Animatable.createAnimatableComponent(Icon);

export default class WeatherIcon extends Component {
  spinValue = new Animated.Value(0);
  state = {
    fontLoaded: false
  };
  componentDidMount = async () => {
    await Font.loadAsync({
      WeatherIcon: require("../../assets/fonts/fontello.ttf")
    });
    this.setState({ fontLoaded: true });
    this.props.shouldRotate && this.animation();
  };
  animation = () => {
    this.spinValue.setValue(0);

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }).start(() => {
      this.animation();
    });
  };

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <Fragment>
        {this.state.fontLoaded && (
          <AnimatableIcon
            name={this.props.name}
            size={this.props.size}
            animation="rotate"
            iterationCount={"infinite"}
            easing={"linear"}
          />
        )}
      </Fragment>
    );
  }
}
