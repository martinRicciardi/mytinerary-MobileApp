import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from "../screen/Details";


const Stack = createStackNavigator();
export default function CitiesStackNavigation() {

    return (
        <Stack.Navigator initialRouteName='Cities'>

            <Stack.Screen name="city" component={Details}
                options={{ headerShown: false, }} />

        </Stack.Navigator>
    )
}