import React, { Component } from "react";
import { ScrollView, Image, Alert, Platform } from 'react-native';
import { Container, Content, Form } from 'native-base';

import FoodForm from '../food-form';
import MForm from '../../components/form';
import MButton from '../../components/button';
import ml50 from '../../helper/mstyle';

const { MTimePicker, Picture } = MForm;
const { ActionButton } = MButton;


class EnterMeal extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Content padder>
                <MTimePicker text='Time' platform={Platform.OS} />
                <FoodForm />
                <ActionButton style={ml50} icon='plus' block={false} />
            </Content>
        );
    }
}

export default EnterMeal;
