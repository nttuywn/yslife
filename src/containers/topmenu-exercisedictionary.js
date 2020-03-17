import React, { Component } from "react";
import { ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Content, ListItem, Text, Row, Grid, Separator, Container } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MTab from '../components/tabs';
import { tabsExerciseDictionary, exerciseList } from '../helper/mock-data';

const { ScrollTabs } = MTab;
const { BackHeader } = MScreenHeader;

class TopmenuExerciseDictionary extends Component {
    render() {

        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader navigation={navigation} text='Exercise List' />
                <ScrollTabs data={tabsExerciseDictionary} exerciseList={exerciseList} listType='thumbnail' navigation={navigation}/>
            </Container>
        );
    }
}

export default TopmenuExerciseDictionary;
