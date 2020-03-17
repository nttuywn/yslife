import React, { Component } from "react";
import { ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Text, Row, Col, CheckBox, Card, CardItem, Grid } from 'native-base';

import MButton from '../button';
import MForm from '../form';

const { ActionButton } = MButton;
const { Picture } = MForm;
const initMeal = {
    time: '',
    food_list: [],
}

const ml50 = {
    // marginLeft: '25%',
    width: '100%'
}

class Meal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,
        }
    }

    toggleSwitch() {
        this.setState({
            checkbox: !this.state.checkbox
        });
    }

    render() {
        const { navigation, meal = initMeal, permeal = initMeal } = this.props;
        return (
            <Card>
                <CardItem>
                    <Grid>
                        <Row>
                            <Col size={1}><Text>Goal</Text></Col>
                            <Col size={3}>
                                <Row><Text>{meal.time}</Text></Row>
                                <Row>{meal.food_list.map(item => <Text>{`${item.food} ${item.amount}`}</Text>)}</Row>
                            </Col>
                            <Col size={1}>
                                {this.state.checkbox === true && <Icon name='camera'/>}
                                <CheckBox
                                    color="#000"
                                    checked={this.state.checkbox}
                                    onPress={() => this.toggleSwitch()}
                                />
                            </Col>
                        </Row>
                        <Row>
                            {permeal.food_list.length > 0 ?
                                <Grid>
                                    <Col size={1}><Text>Performed</Text></Col>
                                    <Col size={3}>
                                        <Row><Text>{permeal.time}</Text></Row>
                                        <Row>{permeal.food_list.map(item => <Text>{`${item.food} ${item.amount}`}</Text>)}</Row>
                                    </Col>
                                    <Col size={1}><Image source={{uri: permeal.image}} style={{width:'100%', height: 30}}/></Col>
                                </Grid>
                                : <ActionButton style={ml50} text='Enter a revised meal' block={true}/>}
                        </Row>
                    </Grid>
                </CardItem>
            </Card>
        );
    }
}

export default Meal;
