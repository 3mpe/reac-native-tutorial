import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, LoginUser } from './../redux/actions/kdogrulama';
import { CardList, CardItem, CustomButton, Spinner } from './../components';


class LoginForm extends Component {

  signup() {
    const { email, password } = this.props;
    this.props.LoginUser({ email, password });
  }

  renderButton() {
    if (!this.props.loading) {
      return <CustomButton onPress={this.signup.bind(this)}>Giriş Yap</CustomButton>;
    }

    return <Spinner size="small" />;
  }

  render() {
    const { inputStyle, subContainerStyle } = style;
    return (
      <View style={subContainerStyle}>
        <CardList>
            <CardItem>
              <TextInput
                placeholder='Email'
                style={inputStyle}
                value={this.props.email}
                onChangeText={text => this.props.emailChanged(text)}
              />
            </CardItem>

            <CardItem>
              <TextInput
                secureTextEntry
                placeholder='Şifreniz'
                style={inputStyle}
                value={this.props.password}
                onChangeText={password => this.props.passwordChanged(password)}
              />
            </CardItem>
          </CardList>
        </View>

    );
  }
}

const style = {
  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },

  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

const mapStateToProps = ({ kimlikdogrulamaresponse }) => {
  const { email, password, loading } = kimlikdogrulamaresponse;
  return {
    email,
    password,
    loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, LoginUser })(LoginForm);
