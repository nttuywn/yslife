import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';
import { Form, Container, Content, Radio, Item, Grid, Col, Text } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation'

import { formInputBodyInformation, formInputBodyInformationRequest } from '../redux/rootAction';
import MForm from '../components/form';
import MScreenHeader from '../components/screen-header';
import MButton from '../components/button';
import { piAttributes } from '../helper/mock-data';

const { BodyInfo } = MForm;
const { OnlyTitle } = MScreenHeader;
const { RedirectButton, ActionButton } = MButton;

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Drawer' })],
  });

const customStyle = {
    mt10: {
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 5,
        height: 40,
        width: '80%',
        marginLeft: '10%',
    },
}

class PIForm extends Component {

    handlePIForm = (label, text) => {
        let form = {};
        form[label] = text;
        this.props.formInputBodyInformation(form);
    }

    render() {
        const { navigation } = this.props;
        const { navigate } = this.props.navigation;
        const { gender = 2, message = '' } = this.props.bodyInformation;
        if(message === 'Body information have saved') return navigation.dispatch(resetAction);
        return (
            <Container>
                <OnlyTitle title="Enter your body information" />
                <Content padder>
                    <Form style={{ marginTop: '30%' }}>
                        <Grid style={customStyle.mt10}>
                            <Col><Text style={{ fontSize: 12 }}>Male:</Text></Col>
                            <Col>
                                <Radio selected={gender === 0 ? true : false}
                                    onPress={() => this.handlePIForm('gender', 0)} />
                            </Col>
                            <Col><Text style={{ fontSize: 12 }}>Female:</Text></Col>
                            <Col>
                                <Radio selected={gender === 1 ? true : false}
                                    onPress={() => this.handlePIForm('gender', 1)} />
                            </Col>
                        </Grid>
                        {piAttributes.map((item, index) =>
                            <BodyInfo
                                key={index}
                                style={customStyle.mt10}
                                label={item.label}
                                handleChange={text => this.handlePIForm(item.key, text)}
                            />)}
                    </Form>
                    <RedirectButton style={{ marginLeft: '68%', marginTop: 15, height: 20 }} icon='a'
                        text='Next' rounded={false} bordered info link='Home' navigate={navigate} />
                </Content>
                <ActionButton style={{ margin: 20 }} text='Confirm' full={true} info={true} 
                onAction={() => this.props.formInputBodyInformationRequest(this.props.bodyInformation)} />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { bodyInformation } = state;
    return { bodyInformation }
}

const mapStateToDispatch = (dispatch) =>
    bindActionCreators(
        {
            formInputBodyInformation,
            formInputBodyInformationRequest
        },
        dispatch
    );

const connectedPIForm = connect(mapStateToProps, mapStateToDispatch)(PIForm)

export default connectedPIForm;
