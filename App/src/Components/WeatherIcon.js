import React, { Component, Fragment } from "react";
import { Text, View, Animated, Easing } from "react-native";
import { Font } from "expo";
import { createIconSetFromFontello } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import fontelloConfig from "../../assets/fonts/config.json";
const Icon = createIconSetFromFontello(fontelloConfig, "WeatherIcon");

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
  };

  render() {
    if (this.state.fontLoaded) {
      return (
        <Fragment>
          {this.props.animated ? (
            <AnimatableIcon
              name={this.props.name}
              size={this.props.size}
              color={this.props.color}
              animation={this.props.animation}
              iterationCount={"infinite"}
              easing={"linear"}
              duration={this.props.duration}
              style={this.props.style || {}}
            />
          ) : (
            <Icon
              name={this.props.name}
              size={this.props.size}
              color={this.props.color}
            />
          )}
        </Fragment>
      );
    }
    return null;
  }
}
