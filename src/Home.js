import React, { Component } from 'react';
import fireBase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import rootReducer from './redux/reducer';
import { Header, CardItem, LoginForm, CustomButton, Spinner } from './components';
import configureStore from './redux/configureStore';

class Home extends Component {

  componentWillMount() {
    fireBase.initializeApp({
      apiKey: 'AIzaSyBlVed7yS25eS5a2wWeO77_M-11qPyJdJ8',
      authDomain: 'kimlikdgrulama.firebaseapp.com',
      databaseURL: 'https://kimlikdgrulama.firebaseio.com',
      projectId: 'kimlikdgrulama',
      storageBucket: 'kimlikdgrulama.appspot.com',
      messagingSenderId: '725609285005'
    });
  }


    renderContent() {
      console.log(this.props);
      switch (this.props.loggedIn) {
        case true:
          return (
            <CardItem>
              <CustomButton onPress={() => { fireBase.auth().signOut(); }}>Giriş</CustomButton>
            </CardItem>
          );
        case false:
          return (
              <LoginForm Title='Oturum Açın' />
          );
        default:
         return (
           <View>
              <Spinner />
           </View>
         );
      }
    }

  render() {
    const reducersConf = createStore(rootReducer, {}, applyMiddleware(thunk));
    return (
      <Provider store={reducersConf}>
          <View>
            <Header headerText='Kimlik Doğrulama' />
            { this.renderContent() }
          </View>
      </Provider>
    );
  }
}

export { Home };
