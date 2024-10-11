import BottomTabNavigation, {
  BottomTabParamList,
} from "./BottomTabNavigation";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TestScreen from "~/screens/TestScreen";

//Type for RootParamList, contains param pass through each screen
export type RootParamList = {
  BottomTabNavigation: NavigatorScreenParams<BottomTabParamList>;
  TestScreen: undefined,
};

//Stack navigation options
const Stack = createStackNavigator<RootParamList>();
const screenOptions = { headerShown: false };

//Root component
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="TestScreen"
    >
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
