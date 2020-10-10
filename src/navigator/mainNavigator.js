import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings136030Navigator from '../features/Settings136030/navigator';
import UserProfile136028Navigator from '../features/UserProfile136028/navigator';
import BlankScreen1135964Navigator from '../features/BlankScreen1135964/navigator';
import BlankScreen0135963Navigator from '../features/BlankScreen0135963/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings136030: { screen: Settings136030Navigator },
UserProfile136028: { screen: UserProfile136028Navigator },
BlankScreen1135964: { screen: BlankScreen1135964Navigator },
BlankScreen0135963: { screen: BlankScreen0135963Navigator },

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
