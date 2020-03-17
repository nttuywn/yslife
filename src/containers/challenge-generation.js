import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, Grid, Form, Card, CardItem, Row, Text, Col } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MForm from '../components/form';
import MButton from '../components/button';
import { day_of_week, exerciseList } from '../helper/mock-data';
import ml50 from '../helper/mstyle';

const { BackHeader, } = MScreenHeader;
const { MText } = MForm;
const { RedirectButton, ActionButton } = MButton;

class DayExercise extends Component {
    render() {
        const { navigate } = this.props
        return (
            <Card>
                <CardItem>
                    <Grid>
                        <Row><Text>1.{day_of_week[0]}</Text></Row>
                        {exerciseList.map(exercise =>
                            <Row>
                                <Col size={7}><Text>{exercise.ex_name}</Text></Col>
                                <Col size={1}><Icon name='times' /></Col>
                            </Row>
                        )}
                        <Row style={{ width: '100%' }}>
                            <Col size={8}>
                                <RedirectButton style={{ marginTop: 20 }} text='Adding Exercise' full info link='ChallengeGenerationExerciseList' navigate={navigate} />
                            </Col>
                        </Row>
                    </Grid>
                </CardItem>
            </Card>

        );
    }
}

class ChallengeGeneration extends Component {

    render() {
        const { navigation } = this.props;
        const { navigate } = navigation
        return (
            <Container>
                <BackHeader navigation={navigation} />
                <Content padder>
                    <Form>
                        <MText text='Challenge Name' />
                        <MText text='Explanation' />
                        <DayExercise navigate={navigate} />
                    </Form>
                    <ActionButton style={ml50} icon='plus' block={false}/>
                </Content>
                <RedirectButton style={{ margin: 20 }} text='Complete Setup' full={true} info={true} link='DiaryDiet' navigate={navigate} />
            </Container>
        );
    }
}

export default ChallengeGeneration;
