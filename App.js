import React from "react";
import { createDrawerNavigator } from "react-navigation";
import Button from "./components/Button";
import LongPress from "./components/LongPress";
import ThreeFingerLongPress from "./components/ThreeFingerLongPress";
import NestedView1 from "./components/NestedView1";
import NestedView2 from "./components/NestedView2";
import NestedView3 from "./components/NestedView3";
import NestedView4 from "./components/NestedView4";
import PanThreeFingerLongPress from "./components/PanThreeFingerLongPress";
import DragAndDrop from "./components/Drag";

const App = createDrawerNavigator({
  Home: {
    screen: Button
  },
  LongPress: {
    screen: LongPress
  },
  ThreeFingerLongPress: {
    screen: ThreeFingerLongPress
  },
  ThreeFingerLongPress: {
    screen: ThreeFingerLongPress
  },
  NestedView1: {
    screen: NestedView1
  },
  NestedView2: {
    screen: NestedView2
  },
  NestedView3: {
    screen: NestedView3
  },
  NestedView4: {
    screen: NestedView4
  },
  PanThreeFingerLongPress: {
    screen: PanThreeFingerLongPress
  },
  DragAndDrop: {
    screen: DragAndDrop
  }
});
export default App;
