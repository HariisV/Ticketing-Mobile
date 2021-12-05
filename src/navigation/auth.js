import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/login';
import Register from '../screen/register';
import LandingPage from '../screen/LandingPage';
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
      <Stack.Screen component={Register} name="Register" />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
