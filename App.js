import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/screens/Reducers';
import Produtos from './src/screens/Produtos';
import ProdutoInternal from './src/screens/ProdutoInternal';
import Home from './src/screens/Home';


let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createAppContainer(

  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false
      }
    },
    Produtos: {
      screen: Produtos,
      navigationOptions: {
        headerShown: false
      }
    },
    ProdutoInternal: {
      screen: ProdutoInternal,
      navigationOptions: {
        headerShown: false
      }
    },

  })
);

export default class App extends Component {

  async componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}