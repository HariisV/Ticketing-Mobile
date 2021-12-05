import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from '../screen/home';
import Profile from '../screen/profile';
import HistoryTransaction from '../screen/history';

import DetailMovie from '../screen/Movie/detail';
import OrderMovie from '../screen/Movie/order';
import CheckoutMovie from '../screen/Movie/checkout';
import ResultTicket from '../screen/View-Ticket';

import UpdatePassword from '../screen/profile/update-password';

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HistoryScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HistoryTransaction}
        name="History Transaction"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={DetailMovie}
        name="DetailMovie"
        options={{headerShown: true}}
      />
      <Stack.Screen
        component={OrderMovie}
        name="OrderMovie"
        options={{headerShown: true}}
      />
      <Stack.Screen
        component={CheckoutMovie}
        name="CheckoutMovie"
        options={{headerShown: true}}
      />
      <Stack.Screen
        component={ResultTicket}
        name="ResultTicket"
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
function MainProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={UpdatePassword}
        name="UpdatePassword"
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {() => (
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = focused ? 'heart' : 'heart-circle-outline';
                  } else if (route.name === 'History Transaction') {
                    iconName = focused ? 'albums' : 'albums-outline';
                  } else if (route.name === 'Profile') {
                    iconName = focused ? 'settings' : 'settings-outline';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#5F2EEA',
                tabBarInactiveTintColor: 'gray',
              })}>
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />

              <Tab.Screen
                name={'History Transaction'}
                component={HistoryScreen}
              />
              <Tab.Screen
                name={'Profile'}
                component={ProfileScreen}
                options={{headerShown: false}}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainProfileScreen"
          component={MainProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
