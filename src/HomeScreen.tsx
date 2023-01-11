import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, View} from 'react-native';
import {RootStackParamList} from './App';

export const HomeScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Home'>
> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Payment" onPress={() => navigation.navigate('Payment')} />
      <Button
        title="Statement"
        onPress={() => navigation.navigate('Statement')}
      />
    </View>
  );
};
