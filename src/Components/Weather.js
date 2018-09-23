import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Dimensions,
  Easing
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import WeatherIcon from "./WeatherIcon";
import Swinging from "./Swinging";

const { width, height } = Dimensions.get("window");

export default class Weather extends Component {
  state = {
    selectedIndex: 1,
    previousIndex: 1
  };

  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  animateStuff = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState((state, props) => {
      return { selectedIndex: index, previousIndex: state.selectedIndex };
    });
  };
  render() {
    const morningFlex = this.state.selectedIndex === 0 ? 6 : 3;
    const afterNoonFlex = this.state.selectedIndex === 1 ? 6 : 3;
    const eveningFlex = this.state.selectedIndex === 2 ? 6 : 3;
    const nightFlex = this.state.selectedIndex === 3 ? 6 : 3;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#8ba892",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: width / 35
          }}
        >
          <EvilIcons name={"location"} color={"#fff"} size={width / 12} />
          <Text style={{ color: "#fff", fontSize: width / 20 }}>Bengaluru</Text>
        </View>
        <TouchableOpacity
          style={{
            flex: morningFlex,
            backgroundColor: "#e3bb88",
            flexDirection: "row"
          }}
          onPress={() => this.animateStuff(0)}
          activeOpacity={1}
        >
          {this.state.selectedIndex === 0 && (
            <Animatable.View
              style={{
                top: width / 10,
                left: width / 25,
                position: "absolute"
              }}
              animation={
                this.state.selectedIndex === 0 ? "slideInDown" : "slideInUp"
              }
            >
              <WeatherIcon
                name={"wi-day-sunny"}
                size={width / 3}
                animated={true}
                animation={"rotate"}
                color={"#db9864"}
                duration={6000}
              />
            </Animatable.View>
          )}
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              paddingLeft: width / 2
            }}
          >
            <Text style={styles.dayTypeText}>MORNING</Text>
            <Text style={styles.tempText}>32&#176;</Text>
            <Text style={styles.weatherTypeText}>Sunny</Text>
            <Text style={styles.windText}>Wind: E 7 mph</Text>
            <Text style={styles.humidityText}>Humidity: 91%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: afterNoonFlex, backgroundColor: "#db9864" }}
          onPress={() => this.animateStuff(1)}
          activeOpacity={1}
        >
          {this.state.selectedIndex === 1 && (
            <React.Fragment>
              <Animatable.View
                style={{
                  top: width / 10,
                  left: width / 25,
                  position: "absolute",
                  zIndex: 5
                }}
                animation={"slideInDown"}
              >
                <WeatherIcon
                  name={"wi-day-sunny"}
                  size={width / 3}
                  animated={true}
                  animation={"rotate"}
                  duration={6000}
                  color={"#b1695a"}
                />
              </Animatable.View>
              <Animatable.View
                style={{
                  top: width / 6,
                  left: width / 10,
                  position: "absolute"
                }}
                animation={"slideInDown"}
              >
                <WeatherIcon
                  name={"wi-cloud"}
                  size={width / 3}
                  animated={false}
                  color={"#b1695a"}
                  duration={6000}
                />
              </Animatable.View>
            </React.Fragment>
          )}

          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              paddingLeft: width / 2
            }}
          >
            <Text style={styles.dayTypeText}>DAY</Text>
            <Text style={styles.tempText}>32&#176;</Text>
            <Text style={styles.weatherTypeText}>Mostly Sunny</Text>
            <Text style={styles.windText}>Wind: N 5 mph</Text>
            <Text style={styles.humidityText}>Humidity: 45%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: eveningFlex, backgroundColor: "#b1695a" }}
          onPress={() => this.animateStuff(2)}
          activeOpacity={1}
        >
          {this.state.selectedIndex === 2 && (
            <React.Fragment>
              <Animatable.View
                style={{
                  top: width / 10,
                  left: width / 25,
                  position: "absolute",
                  zIndex: 5
                }}
                animation={"slideInDown"}
              >
                <WeatherIcon
                  name={"wi-day-sunny"}
                  size={width / 3}
                  animated={true}
                  animation={"rotate"}
                  color={"#644749"}
                  duration={6000}
                />
              </Animatable.View>
              <Animatable.View
                style={{
                  top: width / 6,
                  left: width / 10,
                  position: "absolute",
                  zIndex: 6
                }}
                animation={"slideInDown"}
              >
                <WeatherIcon
                  name={"wi-cloud"}
                  size={width / 3}
                  animated={false}
                  color={"#e3bb88"}
                />
              </Animatable.View>
              <Animatable.View
                style={{
                  top: width / 3.4,
                  left: width / 18,
                  position: "absolute"
                }}
                animation={"slideInDown"}
              >
                <WeatherIcon
                  name={"wi-raindrops"}
                  size={width / 3}
                  animated={true}
                  animation={"fadeOutDown"}
                  color={"#e3bb88"}
                  duration={750}
                  style={{ height: width * 0.66 }}
                />
              </Animatable.View>
              <Animatable.View
                style={{
                  top: width / 3.4,
                  left: width / 7,
                  position: "absolute"
                }}
                animation={"slideInDown"}
              >
                <WeatherIcon
                  name={"wi-raindrops"}
                  size={width / 3}
                  animated={true}
                  animation={"fadeOutDown"}
                  color={"#e3bb88"}
                  duration={1000}
                  style={{ height: width * 0.66 }}
                />
              </Animatable.View>
            </React.Fragment>
          )}
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              paddingLeft: width / 2
            }}
          >
            <Text style={styles.dayTypeText}>EVENING</Text>
            <Text style={styles.tempText}>0&#176;</Text>
            <Text style={styles.weatherTypeText}>Rain</Text>
            <Text style={styles.windText}>Wind: W 12 mph</Text>
            <Text style={styles.humidityText}>Humidity: 91%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: nightFlex, backgroundColor: "#644749" }}
          onPress={() => this.animateStuff(3)}
          activeOpacity={1}
        >
          {this.state.selectedIndex === 3 && (
            <React.Fragment>
              <Animatable.View
                style={{
                  top: width / 10,
                  left: width / 25,
                  position: "absolute",
                  zIndex: 5,
                  transform: [{ rotate: "60deg" }] // think logic for rotating moon
                }}
                animation={"slideInDown"}
              >
                <WeatherIcon
                  name={"wi-moon-alt-waning-crescent-5"}
                  size={width / 3.5}
                  animated={false}
                  color={"#b1695a"}
                />
              </Animatable.View>
              <Animatable.View
                style={{
                  top: width / 6,
                  left: width / 10,
                  position: "absolute",
                  zIndex: 6
                }}
                animation={"slideInDown"}
              >
                <WeatherIcon
                  name={"wi-cloud"}
                  size={width / 3}
                  animated={false}
                  color={"#db9864"}
                />
              </Animatable.View>
              <Animatable.View
                style={{
                  top: width / 3,
                  left: width / 18,
                  position: "absolute",
                  zIndex: 6
                }}
                animation={"slideInDown"}
              >
                <Swinging amplitude={5} delay={300}>
                  <WeatherIcon
                    name={"wi-snowflake-cold"}
                    size={width / 4}
                    animated={true}
                    color={"#db9864"}
                    duration={1000}
                    animation={"fadeOutDown"}
                    style={{ height: width * 0.66 }}
                  />
                </Swinging>
              </Animatable.View>
              <Animatable.View
                style={{
                  top: width / 3,
                  left: width / 6,
                  position: "absolute"
                }}
                animation={"slideInDown"}
              >
                <Swinging amplitude={5} delay={300}>
                  <WeatherIcon
                    name={"wi-snowflake-cold"}
                    size={width / 4}
                    animated={true}
                    color={"#db9864"}
                    duration={750}
                    animation={"fadeOutDown"}
                    style={{ height: width * 0.66 }}
                  />
                </Swinging>
              </Animatable.View>
            </React.Fragment>
          )}
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              paddingLeft: width / 2
            }}
          >
            <Text style={styles.dayTypeText}>NIGHT</Text>
            <Text style={styles.tempText}>-2&#176;</Text>
            <Text style={styles.weatherTypeText}>Cloudy</Text>
            <Text style={styles.windText}>Wind: N 2 mph</Text>
            <Text style={styles.humidityText}>Humidity: 47%</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dayTypeText: {
    color: "#f5e5cf",
    fontFamily: "monospace",
    fontSize: 24,
    paddingTop: 15
  },
  tempText: {
    color: "#fff",
    fontFamily: "monospace",
    fontSize: 36
  },
  weatherTypeText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 28,
    paddingTop: 10,
    paddingBottom: 5
  },
  windText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 18
  },
  humidityText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 18
  }
});
