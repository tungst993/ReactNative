import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.homeScreen}>
                <Text style={styles.homeScreenTitle} >Animations</Text>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate('AnimationBasic')}
                >
                    <Text style={styles.itemText}>Basic</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Responder')}
                    style={{ backgroundColor: 'green', marginTop: 10 }}
                >
                    <Text style={styles.item}>Responder</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('FlipImage')}
                    style={{ backgroundColor: 'green', marginTop: 10 }}
                >
                    <Text style={styles.item}>Animations</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeScreen: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    item : {
        backgroundColor: 'green', 
        marginTop: 10, 
        width: 240,
        alignItems: 'center',
        borderRadius: 5,
    },
    itemText: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
    },
    homeScreenTitle: {
        marginTop: 10,
        marginBottom: 20,
    }
})