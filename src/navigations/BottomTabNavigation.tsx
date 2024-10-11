import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import TestScreen from '~/screens/TestScreen';

export type BottomTabParamList = {
  TestScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
//COMPONENT
const BottomTabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {},
          tabBarItemStyle: {},
        }}>
        <Tab.Screen name="TestScreen" component={TestScreen} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNavigation;
