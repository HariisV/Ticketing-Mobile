import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Auth/login';
import Register from '../screen/Auth/Register';
import LandingPage from '../screen/Main/LandingPage';
const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LandingPage}
        name="LandingPage"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
