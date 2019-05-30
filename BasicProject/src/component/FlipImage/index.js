/*This is an Example of React Native Flip Image Horizontally Using Animation*/
import React, { Component } from 'react';
 
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
 
export default class App extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
  }
  flip_Animation = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
      }).start();
    }
  };
  render() {
    this.SetInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
    const Rotate_Y_AnimatedStyle = {
      transform: [{ rotateY: this.SetInterpolate }],
    };
    return (
      <View style={styles.MainContainer}>
        <Animated.Image
          source={{
            uri:
              'https://aboutreact.com/wp-content/uploads/2018/08/desktop-computer-screen-with-arrow-to-the-left-and-coin-stack.png',
          }}
          style={[Rotate_Y_AnimatedStyle, styles.imageStyle]}
        />
        <TouchableOpacity style={styles.button} onPress={this.flip_Animation}>
          <Text style={styles.TextStyle}> Click Here To Flip The Image </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 6,
  },
  button: {
    width: '80%',
    backgroundColor: '#BAF5B5',
    borderRadius: 6,
    marginTop: 20,
  },
  TextStyle: {
    color: '#000',
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
  },
});