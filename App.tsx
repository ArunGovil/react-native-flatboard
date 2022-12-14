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
      <FlatBoard
        data={OnBoarding}
        onFinish={onComplete}
        accentColor="#93c01f"
        buttonTitle="Lets Go"
        variant="modern"
        headingStyle={{
          fontSize: 22,
          textAlign: 'center',
          color: '#93c01f',
        }}
      />
    </View>
  );
}
