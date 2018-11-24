import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDbERItFJ37TTIMYaZDUX0qoVaxRB8NBN8',
      authDomain: 'one-time-password-fba7b.firebaseapp.com',
      databaseURL: 'https://one-time-password-fba7b.firebaseio.com',
      projectId: 'one-time-password-fba7b',
      storageBucket: 'one-time-password-fba7b.appspot.com',
      messagingSenderId: '50385892467'
    };
firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
