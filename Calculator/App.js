import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultText: '',
      result: ''
    }
    this.ops = ['D', '+', '-', '*', '/']

  }

  buttonPressed = (text) => {

    if (text == '=') {
      return this.calculateResult()
    }

    this.setState({
      resultText: `${this.state.resultText}${text}`
    })
  }

  calculateResult = () => {
    const lastChar = this.state.resultText.split('').pop()

    if(this.ops.indexOf(lastChar) > 0) return
    this.setState({
      result: eval(this.state.resultText),
    })
  }

  operate = (operation) => {
    const { resultText } = this.state
    switch (operation) {
      case 'D':
        let text = resultText.slice(0, resultText.length - 1)
        this.setState({
          resultText: text
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
      const lastChar = resultText.split('').pop()

      if(this.ops.indexOf(lastChar) > 0) return
      if(this.state.text == '') return 
      this.setState({
        resultText: resultText + operation
      })
    }
  }

  render() {
    console.log(this.state.resultText)
    const {
      resultText,
      result
    } = this.state
    let rows = []
    let number = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['.', '0', '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let k = 0; k < 3; k++) {
        row.push(
          <TouchableOpacity style={styles.btn} key={k} onPress={() => this.buttonPressed(number[i][k])}>
            <Text style={styles.btnText}>{number[i][k]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    let operations = []
    for (let i = 0; i < 5; i++) {
      operations.push(
        <TouchableOpacity style={styles.btn} key={i} onPress={() => this.operate(this.ops[i])}>
          <Text style={[styles.btnText, styles.white]}>{this.ops[i]}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {operations}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  white: {
    color: 'white'
  },
  btnText: {
    fontSize: 30
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flexDirection: 'row',
    flexGrow: 3
  },
  numbers: {
    flex: 7,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'space-around'
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    flex: 1,
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  calculationText: {
    fontSize: 20,
    color: 'white'
  }
});
