import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";
import { createStackNavigator } from "react-navigation";
import { RectButton, FlatList } from "react-native-gesture-handler";
import Weather from "./src/Weather";
import Swipeable from "./src/Swipeable";

const SCREENS = {
  Weather: {
    screen: Weather
  },
  Swipeable: {
    screen: Swipeable
  }
};

class MainScreen extends React.Component {
  static navigationOptions = {
    title: "🤞 Animations and Interactions"
  };
  render() {
    const data = Object.keys(SCREENS).map(key => ({ key }));
    return (
      <FlatList
        style={styles.list}
        data={data}
        ItemSeparatorComponent={ItemSeperator}
        renderItem={props => (
          <MainScreenItem
            {...props}
            onPressItem={({ key }) => this.props.navigation.navigate(key)}
          />
        )}
      />
    );
  }
}

const ItemSeperator = () => <View style={styles.separator} />;

class MainScreenItem extends React.Component {
  _onPress = () => this.props.onPressItem(this.props.item);
  render() {
    const { key } = this.props.item;
    return (
      <RectButton style={styles.button} onPress={this._onPress}>
        <Text style={styles.buttonText}>{SCREENS[key].title || key}</Text>
      </RectButton>
    );
  }
}

const App = createStackNavigator(
  {
    Main: { screen: MainScreen },
    ...SCREENS
  },
  {
    initialRouteName: "Main"
  }
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  statusBar: {
    backgroundColor: "#8ba892",
    height: Constants.statusBarHeight
  },
  list: {
    backgroundColor: "#EFEFF4"
  },
  separator: {
    height: 1,
    backgroundColor: "#DBDBE0"
  },
  buttonText: {
    backgroundColor: "transparent"
  },
  button: {
    flex: 1,
    height: 60,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
