import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "../screen/Home";
// import Cities from "../screen/Cities";
// import Profile from "../screen/Profile";
import StackNavigation from "./StackNavigation"
import UserNavigation from "./UserNavigation"

    const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        barStyle={{ backgroundColor: '#3ab588' }}>

            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />),}} />

            <Tab.Screen 
            name="Cities" 
            component={StackNavigation} 
            options={{
                tabBarLabel: 'Cities',
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="city" color={color} size={26} />),}} />

            <Tab.Screen 
            name="Profile" 
            component={UserNavigation} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />),}} />

        </Tab.Navigator>
    )
}