import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import middleware from './middleware'
import  Deck from './components/Deck'
import  Quiz from './components/Quiz'
import  AddQuestion from './components/AddQuestion'
import { setLocalNotification } from './utils/helper'


export const store = createStore(
  reducers,
  middleware
)

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={DeckList} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="AddQuestion" component={AddQuestion} />
    </Stack.Navigator>
  );
}


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </Provider>
    )
  }
}