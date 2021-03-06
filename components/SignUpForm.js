import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-fba7b.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '' };

  // declaring a function this fat arrow way in a class binds the 'this' context
  handleSubmit = async () => {
    const { phone } = this.state;
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone });
    } catch (err) {
      console.log(err, err.response.data);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;
