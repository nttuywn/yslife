import React, { Component } from "react";
import { ScrollView } from 'react-native';
import { Content, ListItem, Text, Row, Grid, Separator, Container, View, Accordion, Input, Item } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MList from '../components/list';
import MNavigation from '../components/navigation';
import MButton from '../components/button';

import { challenge_list } from '../helper/mock-data';
const { ThumbnailList } = MList;
const { RedirectButton } = MButton;
const { IconHeader } = MScreenHeader;
const { NavigationBar } = MNavigation;

const filter = [
    {
        title: 'filter',
    }
]

const customContent = () => <Item regular><Input/></Item>

class Challenge extends Component {
    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        return (
            <Container>
                <IconHeader title='Exercise' navigation={navigation} icon="sign-out" transparent={true} />
                <ScrollView>
                    <Content>
                        <RedirectButton style={{ margin: 5 }} text='Your Challenge' full info link='YourChallenge' navigate={navigate} />
                        <Accordion dataArray={filter} renderContent={customContent} headerStyle={{marginLeft: '47%'}}/>
                        <ThumbnailList datas={challenge_list} link='ChallengeDetails' navigation={navigation}/>
                    </Content>
                </ScrollView>
                <NavigationBar navigate={navigation.navigate}/>
            </Container>
        );
    }
}

export default Challenge;
