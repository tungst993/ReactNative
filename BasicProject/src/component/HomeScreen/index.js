import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Animated } from "react-native";
import backgroundImage from '../../img/star.jpg'

const { width, height } = Dimensions.get('window')
export default class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            time: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.time, {
                toValue: 2,
                duration: 2000
            }
        ).start()
    }
    render() {
        const marginLeft = this.state.time.interpolate({
            inputRange: [0, 2],
            outputRange: [-700, 0]
        })
        const marginTop = this.state.time.interpolate({
            inputRange: [0, 2],
            outputRange: [-100, 0]
        })
        return (
            <ImageBackground
                source={backgroundImage}
                style={{
                    width: width,
                    height: height,
                }}
            >
                <View style={styles.homeScreen}>
                    <Animated.Text style={{ ...styles.homeScreenTitle, marginTop: marginTop }} >React Native Basic</Animated.Text>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.props.navigation.navigate('Calculator')}
                    >
                        <Animated.Text style={{ ...styles.itemText, marginLeft: marginLeft }}>Calculator</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.props.navigation.navigate('FlipImage')}
                    >
                        <Animated.Text style={{ ...styles.itemText, marginLeft: marginLeft }}>Flip Image</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.props.navigation.navigate('Animation')}
                    >
                        <Animated.Text style={{ ...styles.itemText, marginLeft: marginLeft }}>Animations</Animated.Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    homeScreen: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#fff',
        marginTop: 10,
        width: 240,
        alignItems: 'center',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 20,
        padding: 10,
    },
    homeScreenTitle: {
        marginTop: 10,
        marginBottom: 20,
        color: '#fff',
        fontSize: 20,
    }
})