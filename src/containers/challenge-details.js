import React, { Component } from "react";
import { Form, Grid, Col, Body, Content, Container, Row, Text, Card, CardItem, Footer } from 'native-base';
import { Image } from 'react-native';

import MScreenHeader from '../components/screen-header';
import MButton from '../components/button';

const { ActionButton } = MButton;
const { BackHeader } = MScreenHeader;

const initChallenge = {
    name: 'None',
    author: 'User',
    totalDay: 0,
    description: `No data to display.`,
    image: 'https://user-images.githubusercontent.com/16608864/35882949-bbe13aa0-0bab-11e8-859c-ceda3b213818.jpeg',
}

class ChallengeDetails extends Component {
    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        const challenge = navigation.getParam('data', initChallenge)
        return (
            <Container>
                <BackHeader navigation={navigation} />
                <Image source={{ uri: challenge.image }}
                    style={{ width: '100%', height: 160 }} />
                <Content padder>
                    <Grid>
                        <Row><Text>{challenge.name}</Text></Row>
                        <Card>
                            <CardItem>
                                <Grid>
                                    <Row><Text>Trainer: {challenge.author}</Text></Row>
                                    <Row><Text>Day: {challenge.totalDay}</Text></Row>
                                    <Row><Text>Description: {challenge.description}</Text></Row>
                                </Grid>
                            </CardItem>
                        </Card>
                    </Grid>
                </Content>
                <Footer style={{ backgroundColor: '#FFFFFF' }}>
                    <Grid style={{ marginHorizontal: 20  }}>
                        <Col><ActionButton block rounded={false} text='your challenge' /></Col>
                        <Col><ActionButton block rounded={false} text='Challenge' style={{marginLeft: 5, backgroundColor: '#EA5252' }} /></Col>
                    </Grid>
                </Footer>
            </Container>
        );
    }
}

export default ChallengeDetails;
