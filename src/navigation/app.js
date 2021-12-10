import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from '../screen/home';
import Profile from '../screen/Main/profile';
import HistoryTransaction from '../screen/Main/history';

import DetailMovie from '../screen/Main/Movie/Detail';
import OrderMovie from '../screen/Main/Movie/Order';
import CheckoutMovie from '../screen/Main/Movie/Checkout';
import ResultTicket from '../screen/Main/View-Ticket';

import UpdatePassword from '../screen/Main/profile/update-password';
import UpdateProfile from '../screen/Main/profile/update-profile';
import WebView from '../screen/Main/webview';

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home Screen"
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
        name="History Transaction Screen"
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
        name="Profile Screen"
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
      <Stack.Screen
        component={UpdateProfile}
        name="UpdateProfile"
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
        <Stack.Screen name="Home Screen Tab" options={{headerShown: false}}>
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
        <Stack.Screen name="WebViewScreen" component={WebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
