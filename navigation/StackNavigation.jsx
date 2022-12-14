import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from "../screen/Details";
import Cities from '../screen/Cities';

const Stack = createNativeStackNavigator();

export default function CitiesStackNavigation() {

    return (
        <Stack.Navigator initialRouteName=''>

            <Stack.Screen name="cities" component={Cities}
                options={{ headerShown: false, }} />

            <Stack.Screen name="city" component={Details}
                options={{ headerShown: false, }} />

        </Stack.Navigator>
    )
}