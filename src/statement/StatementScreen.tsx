import React from 'react';
import {Button, View} from 'react-native';
import {downloadStatement} from './StatementService';

export const StatementScreen: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() =>
          downloadStatement('076511D2-0A43-495F-BCF7-0D174C6D2B35')
        }
        title="Download"
      />
    </View>
  );
};
