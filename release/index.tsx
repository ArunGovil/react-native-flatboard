import {View, Image, StatusBar, FlatList} from 'react-native';
import React, {useState, useRef} from 'react';
import {styles} from './lib/styles';
import {OnBoardingData, TextStyles} from './lib/types';
import ModernStepper from './lib/components/modern/ModernStepper';
import StandardStepper from './lib/components/standard/StandardStepper';
import ListItem from './lib/components/common/ListItem';
type FlatBoardProps = {
  data: OnBoardingData[];
  onFinish: (e: Event) => void;
  accentColor?: string;
  backgroundColor?: string;
  buttonTitle?: string;
  variant?: 'standard' | 'modern';
  hideIndicator?: boolean;
  headingStyle?: TextStyles;
  descriptionStyle?: TextStyles;
};
export default function FlatBoard({
  data,
  onFinish,
  accentColor,
  backgroundColor,
  buttonTitle,
  hideIndicator,
  variant,
  headingStyle,
  descriptionStyle,
}: FlatBoardProps) {
  const swipeRef = useRef<FlatList>(null);
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
    swipeRef.current &&
      swipeRef.current.scrollToIndex({
        animated: true,
        index: step + 1,
      });
  };

  const previousStep = () => {
    setStep(step - 1);
    swipeRef.current &&
      swipeRef.current.scrollToIndex({
        animated: true,
        index: step - 1,
      });
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor ? backgroundColor : '#ffffff'},
      ]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item): any => item.id}
        ref={swipeRef}
        pagingEnabled
        onMomentumScrollEnd={event => {
          const index = Math.floor(
            Math.floor(event.nativeEvent.contentOffset.x) /
              Math.floor(event.nativeEvent.layoutMeasurement.width),
          );
          setStep(index);
        }}
        data={data}
        renderItem={({item}) => (
          <ListItem
            icon={item.icon}
            description={item.description}
            title={item.title}
            headingStyle={headingStyle}
            descriptionStyle={descriptionStyle}
          />
        )}
        contentContainerStyle={[
          styles.listWrapper,
          variant === 'modern' && {marginTop: '10%'},
        ]}
      />
      {variant === 'modern' ? (
        <ModernStepper
          step={step}
          data={data}
          onFinish={onFinish}
          accentColor={accentColor}
          buttonTitle={buttonTitle}
          hideIndicator={hideIndicator}
        />
      ) : (
        <StandardStepper
          step={step}
          data={data}
          onFinish={onFinish}
          accentColor={accentColor}
          previousStep={previousStep}
          nextStep={nextStep}
          buttonTitle={buttonTitle}
          hideIndicator={hideIndicator}
        />
      )}
    </View>
  );
}
