import React, { Component } from "react";
import { ScrollView, Image, Alert, Platform } from 'react-native';
import { Container, Content, Form } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MForm from '../components/form';
import MButton from '../components/button';
import MealForm from '../components/meal-form';
import { goal_meal, performed_meal } from '../helper/mock-data';

const { BackHeader } = MScreenHeader;
const { MTimePicker, Picture } = MForm;
const { ActionButton } = MButton;

class EnterMeal extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader title='Enter a meal' navigation={navigation} />
                <Content>
                    <MealForm />
                    <Picture text='Photo Registration:' />
                </Content>
                <ActionButton block rounded={false} text='Enter Meals' onAction={() => navigation.navigate('EnterMeal')} />
            </Container>
        );
    }
}

export default EnterMeal;
