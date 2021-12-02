
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import StackNavigator from "./router.Stack";
import Estatisticas from "../screens/Estatisticas";
import Favoritos from '../screens/Favoritos';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#b55031',
            inactiveTintColor: '#a8a29e',
            activeBackgroundColor: '#262626',
            inactiveBackgroundColor: '#171717',
            style: {
                backgroundColor: '#0000',
                paddingBottom: 3
            }
        }}
        initialRouteName="Home"
        activeColor="#00000"
        inactiveColor="#98989"
        screenOptions={{
            tabBarActiveTintColor: '#fff',
        }}>
        <Tab.Screen
            name="Home"
            component={StackNavigator}
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Menu"
            component={Estatisticas}
            options={({ navigation }) => ({
                tabBarLabel: 'Menu',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="menu" size={size} color={color} />
                ),
            })}
        />
        <Tab.Screen
            name="Estatisticas"
            component={Estatisticas}
            options={{
                tabBarLabel: 'Estatisticas',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="insert-chart-outlined" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Números Favoritos"
            component={Favoritos}
            options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="favorite" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default TabNavigation;