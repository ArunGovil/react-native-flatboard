
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
    console.log('Onboarding Completed');
  };
  
  const data = [];

  return (
    <View style={{flex: 1}}>
      <FlatBoard
        data={data}
        onFinish={onComplete}
        accentColor="#93c01f"
        buttonTitle="Lets Go"
        showIndicator
      />
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
## Customizing (props)

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>data</td>
    <td>array</td>
    <td>true</td>
    <td>Empty Array</td>
    <td>Array of data for each slide to be rendered.</td>
  </tr>
   <tr>
    <td>onFinish</td>
    <td>function</td>
    <td>true</td>
    <td>none</td>
    <td>Function to call on tour end.</td>
  </tr>
  <tr>
    <td>accentColor</td>
    <td>string</td>
    <td>false</td>
    <td>#93c01f</td>
    <td>Accent color for primary/finish button.</td>
  </tr>
  <tr>
    <td>buttonTitle</td>
    <td>array</td>
    <td>false</td>
    <td>Get Started</td>
    <td>Title for primary/finish button.</td>
  </tr>
  <tr>
    <td>showIndicator</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Show or hide step indicator.</td>
  </tr> 
</table>

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

Starts installing the app on your android emulator/device.<br>

Your app will start running on the device.


