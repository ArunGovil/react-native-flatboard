import {View, Text, Image, StatusBar, FlatList} from 'react-native';
import React, {useState, useRef} from 'react';
import {useWindowDimensions} from 'react-native';
import {styles} from '../styles';
import {OnBoardingData, TextStyles} from '../types';
import ModernStepper from '../components/modern/ModernStepper';
import StandardStepper from '../components/standard/StandardStepper';

type FlatBoardProps = {
  data: OnBoardingData[];
  onFinish: (e: Event) => void;
  accentColor?: string;
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
  buttonTitle,
  hideIndicator,
  variant,
  headingStyle,
  descriptionStyle,
}: FlatBoardProps) {
  const {width} = useWindowDimensions();
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

  type ListItemProps = {
    icon: any;
    title: string;
    description: string;
  };

  const ListItem = ({icon, title, description}: ListItemProps) => {
    return (
      <View style={[styles.swipeItem, {width: width}]}>
        <Image style={styles.image} source={icon} />
        <Text style={[styles.primaryText, headingStyle && headingStyle]}>
          {title}
        </Text>
        <Text
          style={[styles.secondaryText, descriptionStyle && descriptionStyle]}>
          {description}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
