
<p align="center">
<h2 align="center"><a href="https://www.npmjs.com/package/react-native-flatboard">react-native-flatboard</a></h2>
</p>
<p align="center">
A Flatlist based onboarding screen for React Native
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/ArunGovil/react-native-flatboard/main/src/assets/cover.webp" width=720 alt="flatboard"/>
</p>

---
## Installation
Using npm
```sh
npm i react-native-flatboard
```
Using Yarn
```sh
yarn add react-native-flatboard
```
<br>

> **Note**
> In case of error on first run, try restarting the metro server.

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
        hideIndicator
        headingStyles={{
        fontSize: 24,
        color: '#93c01f',
        textAlign: "center",
        }}
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
    <td>variant</td>
    <td>string</td>
    <td>false</td>
    <td>standard</td>
    <td>Flatboard theme, supports 'standard' & 'modern'.</td>
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
    <td>hideIndicator</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Hide step indicator.</td>
  </tr> 
  <tr>
  <td>headingStyles</td>
  <td>StyleSheet</td>
  <td>false</td>
  <td>default styles</td>
  <td>Custom text styles for heading</td>
  </tr>
  <tr>
  <td>descriptionStyles</td>
  <td>StyleSheet</td>
  <td>false</td>
  <td>default styles</td>
  <td>Custom text styles for description</td>
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


