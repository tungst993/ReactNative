import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen'
import Calculator from './Calculator'


export default SiderBar = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Trang chủ'
      }
    },
    Calculator: {
      screen: Calculator,
      navigationOptions: {
        title: 'Calculator'
      }
    }
  }, {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: props => <HomeScreen {...props}/>
}
);