import React from 'react'
import { View, Text, Animated, Easing } from 'react-native'

class FadeInView extends React.Component {
    constructor() {
        super();
        this.state = {
            fadeAnim: new Animated.Value(0.5),
            slideAnim: new Animated.Value(0),
            rotateAnim: new Animated.Value(0),
        }
    }


    componentDidMount() {
        this.animation()
    }

    animation = () => {
        const amit1 = Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                tension: 10,
                friction: 8,
                duration: 2000,
            }
        )
        const amit2 = Animated.timing(
            this.state.rotateAnim,
            {
                toValue: 0,
                tension: 10,
                friction: 8,
                duration: 2000,
            }
        )
        const amit3 = Animated.timing(
            this.state.rotateAnim,
            {
                toValue: 1,
                duration: 2000,
            }
        )
        const filnalAmin= Animated.sequence([amit3, amit2])
        Animated.loop(filnalAmin).start()
    }
    render() {
        let { fadeAnim, slideAnim, rotateAnim } = this.state
        this.SetInterpolate = rotateAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['45deg', '0deg', '-45deg'],
        });

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,
                    marginLeft: slideAnim,
                    transform: [{ rotate: this.SetInterpolate }]
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}

export default class Basic extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FadeInView style={{ width: 150, height: 150, backgroundColor: '#ff9932', borderRadius: 50 }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 40 }}>Tung st</Text>
                </FadeInView>
            </View>
        )
    }
}