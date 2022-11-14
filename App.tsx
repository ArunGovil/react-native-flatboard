import {View} from 'react-native';
import React from 'react';
import FlatBoard from './src/screens/FlatBoard';
import {OnBoarding} from './src/data/OnBoarding';

const onComplete = () => {
  console.log('Done');
};

export default function App() {
  return (
    <View style={{flex: 1}}>
      <FlatBoard data={OnBoarding} onFinish={onComplete} />
    </View>
  );
}
