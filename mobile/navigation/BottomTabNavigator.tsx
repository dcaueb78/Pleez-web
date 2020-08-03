import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Dishes } from '../screens/Dishes';
import {Cart} from '../screens/Cart';
import {Profile} from '../screens/Profile';
import { BottomTabParamList, DishesParamList, CartParamList, ProfileParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Pratos"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Pratos"
        component={DishNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Comanda"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const DishesTabStack = createStackNavigator<DishesParamList>();

function DishNavigator() {
  return (
    <DishesTabStack.Navigator>
      <DishesTabStack.Screen
        name="Dishes"
        component={Dishes}
        options={{ headerTitle: 'Pratos' }}
      />
    </DishesTabStack.Navigator>
  );
}

const CartTabStack = createStackNavigator<CartParamList>();

function CartNavigator() {
  return (
    <CartTabStack.Navigator>
      <CartTabStack.Screen
        name="Cart"
        component={Cart}
        options={{ headerTitle: 'Comanda' }}
      />
    </CartTabStack.Navigator>
  );

}

const ProfileTabStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'Perfil' }}
      />
    </ProfileTabStack.Navigator>
  );
}