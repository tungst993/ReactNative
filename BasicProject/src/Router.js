import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen'
import Calculator from './Calculator'
import FlipImage from './FlipImage'


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
    },
    FlipImage: {
      screen: FlipImage,
      navigationOptions: {
        title: 'FlipImage'
      }
    }
  }, {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: props => <HomeScreen {...props}/>
}
);