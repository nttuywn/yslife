import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, Accordion, Item, Input } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MForm from '../components/form';
import MButton from '../components/button';
import MList from '../components/list';
import MNavigation from '../components/navigation';
import { challenge_list } from '../helper/mock-data';

const { NavigationBar } = MNavigation;
const { BackHeader, } = MScreenHeader;
const { ThumbnailList } = MList;
const { RedirectButton } = MButton;
const filter = [
    {
        title: 'filter',
    }
]
const customContent = () => <Item regular><Input /></Item>

class GetChallenge extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader text='Get a Challenge' navigation={navigation} />
                <Content>
                    <Accordion dataArray={filter} renderContent={customContent} headerStyle={{ marginLeft: '43%' }} />
                    <ThumbnailList datas={challenge_list} link='ChallengeDetails' navigation={navigation}/>
                </Content>
                <NavigationBar />
            </Container>
        );
    }
}

export default GetChallenge;
