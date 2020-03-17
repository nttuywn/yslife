import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Grid, Col, Content, Container, Text, Row } from 'native-base';
import { Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'

import { APISignup, LoginFunction } from '../redux/rootAction';
import MStyle from './styles'
import MForm from '../components/form';
import MButton from '../components/button';

const { MText, Password } = MForm;
const { ActionButton, RedirectButton } = MButton;

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'PIForm' })],
  });

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        }
    }

    render() {
        const { message } = this.props.signupResponse;
        const { navigate } = this.props.navigation;
        const { login, navigation } = this.props;
        const imgLink = 'https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
        if (login.token) return navigation.dispatch(resetAction);
        return (
            <Container>
                <Image source={{ uri: imgLink }}
                    style={{ width: '100%', height: 230 }} />
                <Content padder>
                    <Form>
                        <Grid>
                            <Row style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}><Text style={{ color: '#FF0000', fontSize: 14 }}>{message}</Text></Row>
                        </Grid>
                        <MText text='ID' handleChange={(e) => this.setState({ user: e })} style={MStyle.mb15} />
                        <Password style={MStyle.mb15} handleChange={(e) => this.setState({ password: e })} />
                        <ActionButton style={MStyle.mb15} block={true} onAction={() => this.props.LoginFunction(this.state.user, this.state.password)} text="Login" />
                        <Grid>
                            <Col>
                                <ActionButton text='Sign Up' block={true} style={MStyle.mb15}
                                    onAction={() => this.props.APISignup(this.state.user, this.state.password)}
                                />
                            </Col>
                            <Col><RedirectButton text='Find ID/PW' block={true} style={MStyle.mlb} link='Home' navigate={navigate} /></Col>
                        </Grid>
                    </Form>
                </Content>
            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    const { signupResponse, login } = state;
    return { signupResponse, login }
}

const mapStateToDispatch = (dispatch) =>
    bindActionCreators(
        {
            LoginFunction,
            APISignup
        },
        dispatch
    );

const connectedLogin = connect(mapStateToProps, mapStateToDispatch)(Login)

export default connectedLogin;
