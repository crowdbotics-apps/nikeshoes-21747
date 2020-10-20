import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn51151731Navigator from '../features/SignIn51151731/navigator';
import BlankScreen2151730Navigator from '../features/BlankScreen2151730/navigator';
import BlankScreen1151729Navigator from '../features/BlankScreen1151729/navigator';
import BlankScreen0151728Navigator from '../features/BlankScreen0151728/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn51151731: { screen: SignIn51151731Navigator },
BlankScreen2151730: { screen: BlankScreen2151730Navigator },
BlankScreen1151729: { screen: BlankScreen1151729Navigator },
BlankScreen0151728: { screen: BlankScreen0151728Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
