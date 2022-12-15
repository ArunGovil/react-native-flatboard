import {View, StyleSheet} from 'react-native';
import React from 'react';
import {OnBoardingData} from '../../types';

type StepIndicatorProps = {
  data: OnBoardingData[];
  current: number;
  accent?: string;
};

export default function StepIndicator({
  data,
  current,
  accent,
}: StepIndicatorProps) {
  return (
    <View style={styles.container}>
      {data.map(item => {
        return (
          <View
            key={item.id}
            style={[
              styles.circle,
              item.id - 1 === current && {
                backgroundColor: accent ? accent : '#93c01f',
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'center',
  },
  circle: {
    height: 8,
    width: 8,
    backgroundColor: '#eeeeee',
    borderRadius: 12,
    marginHorizontal: 2,
  },
});
