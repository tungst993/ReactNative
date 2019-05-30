import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './component/HomeScreen'
import Calculator from './component/Calculator'
import FlipImage from './component/FlipImage'
import Animation from './component/Animation'
import AnimationBasic from './component/Animation/component/basic'
import Responder from './component/Animation/component/responder'


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
    },
    Animation: {
      screen: Animation,
      navigationOptions: {
        title: 'Animation'
      }
    },
    AnimationBasic: {
      screen: AnimationBasic,
      navigationOptions: {
        title: 'Animation Basic'
      }
    },
    Responder: {
      screen: Responder,
      navigationOptions: {
        title: 'Responder'
      }
    }
  }, {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: props => <HomeScreen {...props}/>
}
);