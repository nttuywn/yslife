import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardItem, Grid, Row, Col, Text } from 'native-base';

import MButton from '../button';

const { RedirectButton, ActionButton } = MButton;


class Exercise extends Component {
    render() {
        const { exercise, navigate } = this.props;
        return (
            <Card>
                <CardItem>
                    <Grid>
                        <Row>
                            <Col><Text>{exercise.ex_name}</Text></Col>
                            <Col><RedirectButton transparent text='Information' link='ExerciseDetails' navigate={navigate} /></Col>
                            <Col><RedirectButton transparent text='View Statistics' link='TopmenuProfile' navigate={navigate} /></Col>
                        </Row>
                        <Row>
                            <Col size={3}><Text>Rest Time: 1:00</Text></Col>
                            <Col size={1}><Icon name='play' /></Col>
                            <Col size={1}><Icon name='stop' /></Col>
                            <Col size={1}><Icon name='cogs' /></Col>
                        </Row>
                        <Row>
                            <Col size={1}></Col>
                            <Col size={2}><Text>Recent History</Text></Col>
                            <Col size={3}><Text>Performance Record</Text></Col>
                        </Row>
                        {exercise.set_list.map(set =>
                            <Row>
                                <Col size={1}><Text>{set.type}</Text></Col>
                                <Col size={3}><Text>{`${set.weight} ${set.times}`}</Text></Col>
                                <Col size={3}><Text>{`${set.pweight} ${set.ptimes}`}</Text></Col>
                                <Col size={1}><Icon name='times' /></Col>
                            </Row>
                        )}
                        {/* {Alert.alert(exercise.set_list)} */}
                        <Row>
                            <ActionButton text='Add Set' />
                        </Row>
                    </Grid>
                </CardItem>
            </Card>
        );
    }
}

export default Exercise;
