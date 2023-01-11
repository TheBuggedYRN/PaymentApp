import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from './HomeScreen';
import {PaymentScreen} from './payment/PaymentScreen';
import {StatementScreen} from './statement/StatementScreen';

export type RootStackParamList = {
  Home: undefined;
  Payment: undefined;
  Statement: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Statement" component={StatementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
