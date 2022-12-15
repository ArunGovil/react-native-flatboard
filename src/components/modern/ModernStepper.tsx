import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../styles';
import {OnBoardingData} from '../../types';
import StepIndicator from '../common/StepIndicator';

type ModernStepperProps = {
  step: number;
  data: OnBoardingData[];
  onFinish: (e: Event) => void;
  accentColor?: string;
  buttonTitle?: string;
  hideIndicator?: boolean;
};

export default function ModernStepper({
  step,
  data,
  onFinish,
  hideIndicator,
  accentColor,
  buttonTitle,
}: ModernStepperProps) {
  return (
    <View style={styles.modernStepper}>
      <View style={styles.modernIndicator}>
        {!hideIndicator && (
          <StepIndicator current={step} data={data} accent={accentColor} />
        )}
      </View>
      <TouchableOpacity
        style={[
          styles.modernButton,
          {backgroundColor: accentColor ? accentColor : '#93c01f'},
        ]}
        onPress={onFinish}>
        <Text style={styles.modernTitle}>
          {buttonTitle ? buttonTitle : 'Get Started'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
