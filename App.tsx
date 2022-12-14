import {View} from 'react-native';
import React from 'react';
import {OnBoarding} from './src/data/OnBoarding';
import FlatBoard from 'react-native-flatboard';

const onComplete = () => {
  console.log('Done');
};

export default function App() {
  return (
    <View style={{flex: 1}}>
      <FlatBoard
        data={OnBoarding}
        onFinish={onComplete}
        accentColor="#93c01f"
        buttonTitle="Test Go!"
      />
    </View>
  );
}
