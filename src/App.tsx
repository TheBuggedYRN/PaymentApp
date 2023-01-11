import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {HomeScreen} from './HomeScreen';
import {PaymentScreen} from './payment/PaymentScreen';
import {StatementScreen} from './statement/StatementScreen';
import Instabug from 'instabug-reactnative';

export type RootStackParamList = {
  Home: undefined;
  Payment: undefined;
  Statement: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  useEffect(() => {
    Instabug.start('45bd9804237d56d7f0c6a5d69f154638', [
      Instabug.invocationEvent.floatingButton,
    ]);
  }, []);

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
