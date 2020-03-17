import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Card, CardItem, Form, Content } from "native-base";

import MForm from '../form';

const { MText, MNumber } = MForm;

class FoodForm extends Component {

    render() {
        return (
            <Card>
                <CardItem>
                    <Content>
                        <Form>
                            <MText text='Food Name' />
                            <MNumber text='Amount' />
                        </Form>
                    </Content>
                </CardItem>
            </Card>
        );
    }
}

export default FoodForm;
