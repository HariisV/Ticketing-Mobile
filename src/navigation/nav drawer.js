import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/home';
import Profile from '../screen/profile';
import DetailMovie from '../screen/Movie/detail';
import OrderMovie from '../screen/Movie/order';
import CheckoutMovie from '../screen/Movie/checkout';
import ResultTicket from '../screen/View-Ticket';

import DrawerContent from '../components/DrawerContent';

function HomeNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        component={DetailMovie}
        name="DetailMovie"
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        component={OrderMovie}
        name="OrderMovie"
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        component={CheckoutMovie}
        name="CheckoutMovie"
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        component={ResultTicket}
        name="ResultTicket"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
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

function AppNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
