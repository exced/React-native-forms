import React, { Component } from 'react'
import { Colors } from '../Themes'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import LoginForm from '../Forms/LoginForm'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null, // value of current form
    }
  }

  _handlePressLogin = () => {
    // call getValue() to get the values of the form
    const value = this.refs.form.getValue()

    if (value) { // if validation fails, value will be null
      const { username, password } = value // value here is an instance of UserCredentials
      // Login logic : ...
      // this.props.attemptLogin(username, password)
    }
  }

  _onValueChange = (value) => this.setState({ value: value })

  render() {

    const { value } = this.state

    return (
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container} keyboardShouldPersistTaps='never'>
        <View style={styles.form}>
          <LoginForm ref='form' onChange={this._onValueChange} onSubmitEditing={this._handlePressLogin} />
          <Button title='Login' onPress={this._handlePressLogin} disabled={!value} />
        </View>
      </ScrollView>
    )
  }
}
