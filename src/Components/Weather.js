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
import WeatherIcon from "./WeatherIcon";

const { width, height } = Dimensions.get("window");

export default class Weather extends Component {
  state = {
    selectedDay: 0
  };

  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  animateStuff = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ selectedDay: index });
  };
  render() {
    const morningFlex = this.state.selectedDay === 0 ? 6 : 3;
    const afterNoonFlex = this.state.selectedDay === 1 ? 6 : 3;
    const eveningFlex = this.state.selectedDay === 2 ? 6 : 3;
    const nightFlex = this.state.selectedDay === 3 ? 6 : 3;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#8ba892" }}>
          <Text>Bengaluru</Text>
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
          <View
            style={{
              // flex: 1,
              top: width / 10,
              left: width / 10
            }}
          >
            <WeatherIcon name={"wi-day-sunny"} size={75} shouldRotate={true} />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
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
          <Text>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: eveningFlex, backgroundColor: "#b1695a" }}
          onPress={() => this.animateStuff(2)}
          activeOpacity={1}
        >
          <Text>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: nightFlex, backgroundColor: "#644749" }}
          onPress={() => this.animateStuff(3)}
          activeOpacity={1}
        >
          <Text>Day</Text>
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
