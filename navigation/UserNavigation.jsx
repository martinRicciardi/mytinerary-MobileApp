import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screen/Profile';
import SignUp from '../components/SignUp'

const Stack = createNativeStackNavigator();

export default function CitiesStackNavigation() {

    return (
        <Stack.Navigator initialRouteName=''>

            <Stack.Screen name="profile" component={Profile}
                options={{ headerShown: false, }} />

            <Stack.Screen name="register" component={SignUp}
                options={{ headerShown: false, }} />

        </Stack.Navigator>
    )
}