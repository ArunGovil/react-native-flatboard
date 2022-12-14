import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useWindowDimensions} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  swipeItem: {
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listWrapper: {
    marginTop: '40%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 280,
    width: 280,
    marginBottom: 48,
    borderRadius: 8,
  },
  primaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#080c12',
  },
  secondaryText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 18,
  },
  stepper: {
    position: 'absolute',
    bottom: 100,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextButton: {
    padding: 5,
    paddingHorizontal: 10,
    color: '#666',
  },
  skipButton: {
    padding: 5,
    borderRadius: 24,
    backgroundColor: '#93c01f',
    color: '#ffffff',
    minWidth: 90,
    textAlign: 'center',
  },
});
