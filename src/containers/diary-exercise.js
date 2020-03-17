import React, { Component } from "react";
import { ScrollView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Form, Card, CardItem, Grid, Row, Col, Text, Button } from 'native-base';

import MScreenHeader from '../components/screen-header';
import Exercise from '../components/challenge-exercise'
import MForm from '../components/form';
import MButton from '../components/button';
import { exerciseList } from '../helper/mock-data';
import ml50 from '../helper/mstyle';

const { BackHeader } = MScreenHeader;
const { BodyInfo, Picture } = MForm;
const { RedirectButton, ActionButton } = MButton;

class DiaryExercise extends Component {
    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        return (
            <Container>
                <BackHeader text='Exercise' navigation={navigation} />
                <Content padder>
                    <RedirectButton style={{ margin: 5 }} text='Challenge Settings' full info link='ChallengeSettings' navigate={navigate} />
                    {exerciseList.map(exercise => <Exercise exercise={exercise} navigate={navigate} />)}
                    <ActionButton style={ml50} icon='plus' block={false} />
                </Content>
            </Container>
        );
    }
}

export default DiaryExercise;
