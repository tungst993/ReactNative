import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.homeScreen}>
                <Text style={styles.homeScreenTitle} >React Native Basic</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Calculator')}
                    style={{ backgroundColor: 'green' }}
                >
                    <Text style={styles.item}>Calculator</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeScreen: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    item: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
        borderRadius: 5,
    },
    homeScreenTitle: {
        marginTop: 10,
        marginBottom: 20,
    }
})