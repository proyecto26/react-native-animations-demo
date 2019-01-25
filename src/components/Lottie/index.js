import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Title,
  Icon,
  Body,
  Button,
  Right,
  Left,
  Fab,
} from 'native-base'
import Styles from './styles'
import LottieView from 'lottie-react-native'

class LottieScreen extends Component {
  state = {
    animate: true
  }

  toggleAnimation() {
    const animate = !this.state.animate
    animate ? this.animation.play() : this.animation.reset()
    this.setState({ animate })
  }
  
  render() {
    const { navigation } = this.props
    const { animate } = this.state
    return (
      <Container style={Styles.container}>
        <Header>
          <Left></Left>
          <Body style={Styles.title}>
            <Title>JSON animation</Title>
          </Body>
          <Right>
            <Button onPress={() => navigation.navigate('Motion')} icon transparent>
              <Icon type="Ionicons" name='analytics' />
            </Button>
          </Right>
        </Header>
        <Content scrollEnabled={false} contentContainerStyle={Styles.content}>
          <LottieView
            source={require('../../assets/animations/moon.json')}
            ref={animation => {
              this.animation = animation;
            }}
            loop
            autoPlay
            resizeMode="cover"
          />
          <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.toggleAnimation()}>
            <Icon name={animate ? 'pause': 'play'} />
          </Fab>
        </Content>
      </Container>
    )
  }
}

export default LottieScreen
