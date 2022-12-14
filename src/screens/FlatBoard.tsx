import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useWindowDimensions} from 'react-native';
import {styles} from '../styles';
import {OnBoardingData} from '../types';

type FlatBoardProps = {
  data: OnBoardingData[];
  onFinish: (e: Event) => void;
  accentColor?: string;
  buttonTitle?: string;
};

export default function FlatBoard({
  data,
  onFinish,
  accentColor,
  buttonTitle,
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
        <Text style={[styles.primaryText]}>{title}</Text>
        <Text style={[styles.secondaryText]}>{description}</Text>
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
        contentContainerStyle={styles.listWrapper}
      />
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
        {step < data.length - 1 ? (
          <TouchableOpacity onPress={nextStep}>
            <Text style={[styles.nextButton]}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onFinish}>
            <Text style={[styles.skipButton, {backgroundColor: accentColor}]}>
              {buttonTitle ? buttonTitle : 'Get Started'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
