import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import GetScreen from './components/GetScreen';
import PutScreen from './components/PutScreen';
import PostScreen from './components/PostScreen';
import DeleteScreen from './components/DeleteScreen';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

const TabNavigator = createBottomTabNavigator({
  Get: GetScreen,
  Put: PutScreen,
  Post: PostScreen,
  Delete: DeleteScreen,
});

const DrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  About: AboutScreen,
});


const DrawerContainer = createAppContainer(DrawerNavigator);

const AppContainer = createAppContainer(
  createBottomTabNavigator({
    Tabs: TabNavigator,
    Drawer: DrawerContainer,
  })
);

export default function App() {
  return <AppContainer />;
}
