import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
