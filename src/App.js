import React, { Component } from 'react'
import { Root } from 'native-base'
import { createStackNavigator, createAppContainer } from "react-navigation"

// You can import from local files
import LottieScreen from './components/Lottie';
import MotionScreen from './components/Motion';

const AppNavigator = createStackNavigator(
  {
    Lottie: LottieScreen,
    Motion: MotionScreen
  },
  {
    initialRouteName: 'Lottie',
    headerMode: 'none'
  }
);
const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    )
  }
}

export default App;