import React, { Component } from "react";
import { ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Content, ListItem, Text, Row, Grid, Separator, Container } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MSlideShow from '../components/slide-show';
import MNavigation from '../components/navigation';

import { user } from '../helper/mock-data';
const { BackHeader } = MScreenHeader;

const rate = n => {
    let ratting = [];
    for( let i = 0; i < n; i++) ratting.push(<Icon name='star'/>)
    return ratting;
}

class TopmenuProfile extends Component {
    render() {

        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader navigation={navigation} title='Profile' />
                <ScrollView>
                    <Content>
                        <Separator bordered>
                            <Text>Profile:</Text>
                        </Separator>
                        <ListItem>
                            <Grid>
                                <Row><Image source={{uri: user.avatar}} style={{ width: '100%', height: 160 }}/></Row>
                                <Row><Text>ID: {user.id}</Text></Row>
                                <Row><Text>Name: {user.name}</Text></Row>
                                <Row><Text>Nick name: {user.nickname}</Text></Row>
                                <Row><Text>Mail: {user.mail}</Text></Row>
                                <Row><Text>Membership level: {user.membershiplevel}</Text></Row>
                                <Row><Text>Rate:{rate(user.rating)}</Text></Row>
                            </Grid>
                        </ListItem>

                        <Separator bordered>
                            <Text>Other Contents:</Text>
                        </Separator>
                        <ListItem>
                            <Text>Training Expertise</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Your Success is Our Goal</Text>
                        </ListItem>
                        <Separator bordered>
                            <Text>Other Contents:</Text>
                        </Separator>
                        <ListItem>
                            <Text>Training Expertise</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Your Success is Our Goal</Text>
                        </ListItem>
                    </Content>
                </ScrollView>

            </Container>
        );
    }
}

export default TopmenuProfile;
