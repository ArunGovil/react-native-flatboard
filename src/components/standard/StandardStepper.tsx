import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../styles';
import {OnBoardingData} from '../../types';
import StepIndicator from '../common/StepIndicator';

type StandardStepperProps = {
  step: number;
  data: OnBoardingData[];
  onFinish: (e: Event) => void;
  previousStep: (e: Event) => void;
  nextStep: (e: Event) => void;
  accentColor?: string;
  buttonTitle?: string;
  hideIndicator?: boolean;
};

export default function StandardStepper({
  step,
  onFinish,
  hideIndicator,
  data,
  accentColor,
  buttonTitle,
  previousStep,
  nextStep,
}: StandardStepperProps) {
  return (
    <View style={styles.stepper}>
      {step === 0 ? (
        <TouchableOpacity onPress={onFinish}>
          <Text style={[styles.nextButton]}>Skip</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={previousStep}>
          <Text style={[styles.nextButton]}>Previous</Text>
        </TouchableOpacity>
      )}
      <View style={styles.indicator}>
        {!hideIndicator && (
          <StepIndicator current={step} data={data} accent={accentColor} />
        )}
      </View>
      {step < data.length - 1 ? (
        <TouchableOpacity onPress={nextStep}>
          <Text style={[styles.nextButton]}>Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onFinish}>
          <Text
            style={[
              styles.skipButton,
              {backgroundColor: accentColor ? accentColor : '#93c01f'},
            ]}>
            {buttonTitle ? buttonTitle : 'Get Started'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
