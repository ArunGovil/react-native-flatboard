import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listWrapper: {
    minHeight: '50%',
    maxHeight: '90%',
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
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextButton: {
    padding: 5,
    borderRadius: 24,
    color: '#666',
    minWidth: 90,
    textAlign: 'center',
  },
  skipButton: {
    padding: 5,
    borderRadius: 24,
    color: '#ffffff',
    minWidth: 90,
  },
  skipItem: {
    color: '#ffffff',
    textAlign: 'center',
  },
  indicator: {},
  modernIndicator: {
    marginBottom: 26,
  },
  modernStepper: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  modernButton: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modernTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
});
