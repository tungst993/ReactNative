import React from "react";
import { createAppContainer } from "react-navigation";
import SiderBar from './Router'

const AppContainer = createAppContainer(SiderBar)

export default class App extends React.Component{
  render() {
    return <AppContainer/> 
  }
}