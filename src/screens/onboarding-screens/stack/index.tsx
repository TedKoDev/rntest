import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {stackScreenOptions} from '../../../navigators/navigator-options';
import NAMES from './names';
import {OnbordingScreen, StartScreen} from '../childrens';

const Stack = createNativeStackNavigator();

export default function OnbordingStack() {
  return (
    <Stack.Navigator
      initialRouteName={NAMES.ONBORDING_SCREEN}
      screenOptions={stackScreenOptions}>
      <Stack.Screen name={NAMES.ONBORDING_SCREEN} component={OnbordingScreen} />
      <Stack.Screen name={NAMES.START_SCREEN} component={StartScreen} />
    </Stack.Navigator>
  );
}
