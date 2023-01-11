import React from 'react';
import {Button, View} from 'react-native';
import {pay} from './PaymentService';

export const PaymentScreen: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => pay()} title="Pay" />
    </View>
  );
};
