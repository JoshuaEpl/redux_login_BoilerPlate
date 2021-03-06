import React, { Component } from 'react';
import { TouchableOpacity, Text, Animated, Easing, Image } from 'react-native';

import spinner from '../Images/loading.gif';

const MARGIN = 40;

const styles = {
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
};

export default class ButtonSubmit extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    if (this.state.isLoading) return;
    this.setState({ isLoading: true });
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this.onGrow();
    }, 2000);

    setTimeout(() => {
      //   Actions.secondScreen();
      this.setState({ isLoading: false });
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  }

  onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <Animated.View>
        <TouchableOpacity style={styles.button} onPress={this.onPress} activeOpacity={1}>
          {this.state.isLoading ? (
            <Image source={spinner} style={styles.image} />
          ) : (
            <Text style={styles.text}>LOGIN</Text>
          )}
        </TouchableOpacity>
        <Animated.View style={styles.circle} />
      </Animated.View>
    );
  }
}
