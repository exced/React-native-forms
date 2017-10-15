import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Colors } from '../Themes'
import { TextInput, View, Text } from 'react-native'

import styles from './Styles/LoginFormStyle'

export default class LoginForm extends Component {

  constructor(props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * set given default value to enhance flexibility
    *************************************************************/
    const { value } = props
    this.state = {
      value: value ? value : {
        username: '',
        password: '',
      }
    }
  }

  /* ***********************************************************
  * STEP 2
  * getValue always returns state if valid else null
  *************************************************************/
  getValue = () => this.validate() ? this.state.value : null

  /* ***********************************************************
  * STEP 3
  * Validate method is your form validation logic
  *************************************************************/
  validate = () => this.state.value.username && this.state.value.password

  /* ***********************************************************
  * STEP 4
  * Propagate state changes to this and notify new state to
  * parent with 'onChange' props
  *************************************************************/
  _setState = (state) => this.setState({ ...this.state, value: { ...this.state.value, ...state } }, () => this.props.onChange(this.getValue()))

  /* ***********************************************************
  * STEP 5
  * Form Rendering
  *************************************************************/
  render() {

    const { onChange, onSubmitEditing } = this.props
    const { username, password } = this.state.value

    return (
      <View>
        <TextInput
          placeholder="Username"
          placeholderTextColor={Colors.steel}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize='none'
          autoCorrect={false}
          underlineColorAndroid="transparent"
          onChangeText={(username) => this._setState({ username })}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.steel}
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          onChangeText={(password) => this._setState({ password })}
          returnKeyType="go"
          onSubmitEditing={() => this.validate() && onSubmitEditing()}
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
      </View>
    )
  }
}

/* ***********************************************************
* STEP 6
* Minimal Props
*************************************************************/
LoginForm.propTypes = {
  onSubmitEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.object,
}

LoginForm.defaultProps = {
  onChange: () => { },
  value: null,
}
