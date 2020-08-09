import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Onboarding} from "./scr/Authentication";
import {LoadAssets} from "./scr/components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator()
const AuthenticationNavigator = () => {
  return (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name = "Hello Componenet" component={Onboarding}/>
  </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{fonts}}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}