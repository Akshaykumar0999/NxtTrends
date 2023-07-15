import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginFormContainer,
  WebsiteLogoImage,
  ContainerCards,
  FormContainer,
  InputLabelCard,
  InputCard,
  CheckBoxCard,
  LoginButton,
  CheckBoxLabelCard,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    checked: 'password',
    showError: false,
    errorMsg: '',
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    if (event.target.checked === true) {
      this.setState({checked: 'text'})
    } else {
      this.setState({checked: 'password'})
    }
  }

  onSubmitSuccessfully = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = msg => {
    this.setState({showError: true, errorMsg: msg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccessfully(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderLoginFormView = () => {
    const {username, password, checked, errorMsg, showError} = this.state
    return (
      <LoginContainer>
        <LoginFormContainer>
          <WebsiteLogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.submitForm}>
            <ContainerCards>
              <InputLabelCard htmlFor="username">USERNAME</InputLabelCard>
              <InputCard
                type="text"
                id="username"
                onChange={this.updateUsername}
                value={username}
              />
            </ContainerCards>
            <ContainerCards>
              <InputLabelCard htmlFor="password">PASSWORD</InputLabelCard>
              <InputCard
                type={checked}
                id="password"
                onChange={this.updatePassword}
                value={password}
              />
            </ContainerCards>
            <CheckBoxCard>
              <input
                id="checkbox"
                type="checkbox"
                onChange={this.onChangeCheckbox}
                value={checked}
              />
              <CheckBoxLabelCard htmlFor="checkbox">
                Show Password
              </CheckBoxLabelCard>
            </CheckBoxCard>
            <LoginButton type="submit">Login</LoginButton>
            <ErrorMsg>{showError && `* ${errorMsg}`}</ErrorMsg>
          </FormContainer>
        </LoginFormContainer>
      </LoginContainer>
    )
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return this.renderLoginFormView()
  }
}

export default Login
