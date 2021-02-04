

import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-community/google-signin';

import Home from '../../screens/Home';

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '721198673610-bvlnhd32hpiqk54lg1j4tntom7u3h5bc.apps.googleusercontent.com',
        });
    }, []);

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};


export default AppStack;