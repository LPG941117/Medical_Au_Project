import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
        height:100,
      },
      headerTransparent: 'true',
      headerTitleAlign:'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize:30,
      },
    }}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen name='Signup' component={SignupScreen} options={{ title: 'Sign Up'}}/>
    </Stack.Navigator>
  );
}
