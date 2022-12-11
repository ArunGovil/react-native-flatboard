
<p align="center">
<h3 align="center">react-native-flatboard</h3>
</p>
<p align="center">
A Flatlist based onboarding screen for React Native
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/ArunGovil/react-native-flatboard/main/src/assets/demo.webp" width=360 alt="cmdr"/>
</p>

---
## Installation
```sh
yarn add react-native-flatboard
```

#### Basic usage:

```jsx
import { View } from 'react-native';
import FlatBoard from 'react-native-flatboard';

export default function App() {
  const onComplete = () => {
    console.log('Done');
  };
  
  const data = [];

  return (
    <View style={{flex: 1}}>
      <FlatBoard data={data} onFinish={onComplete} />
    </View>
  );
}

```

#### Data format:

```jsx

const data = [
  {
    id: 1,
    title: 'Screen One',
    description: 'Description One',
    icon: require('image-path.jpg'),
  },
  {
    id: 2,
    title: 'Screen Two',
    description: 'Description Two',
    icon: require('image-path.jpg'),
  },
];

```

## Running locally

In the project directory, you can run:

```sh
yarn install
yarn start

```

Starts metro server in development mode.<br>
Turn on Android emulator or connect external android device.

```sh
yarn android
```

Starts installing the app on your android emulator/devcice.<br>

Your app will start running on the device.


