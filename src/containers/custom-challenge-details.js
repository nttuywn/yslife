import React, { Component } from "react";
import { ScrollView, Image } from 'react-native';
import { Container, Content, Form } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MForm from '../components/form';
import MButton from '../components/button';
import MList from '../components/list';
import { exerciseList } from '../helper/mock-data';
import Exercise from '../components/challenge-exercise';

const { BackHeader, } = MScreenHeader;
const { ThumbnailList } = MList;
const { RedirectButton } = MButton;

class CustomChallengeDetails extends Component {
    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        const challenge = navigation.getParam('data', '')
        return (
            <Container>
                <BackHeader text={challenge.name} navigation={navigation} icon='edit' />
                <Content >
                    {exerciseList.map(exercise => <Exercise exercise={exercise} navigate={navigate} />)}
                </Content>
                <RedirectButton style={{ margin: 20 }} text='Challenge' full info link='Diary' navigate={navigate} />
            </Container>
        );
    }
}

export default CustomChallengeDetails;
