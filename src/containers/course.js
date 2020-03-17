import React, { Component } from "react";
import { ScrollView } from 'react-native';
import { Content, ListItem, Text, Row, Grid, Separator, Container, View } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MList from '../components/list';
import MNavigation from '../components/navigation';

import { course_list } from '../helper/mock-data';
const { ThumbnailList } = MList;
const { IconHeader } = MScreenHeader;
const { NavigationBar } = MNavigation;

class Course extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <IconHeader title='Course' navigation={navigation} icon="sign-out" transparent={true} />
                <ScrollView>
                    <Content>
                        <ThumbnailList datas={course_list} icon='user' />
                    </Content>
                </ScrollView>
                <NavigationBar navigate={navigation.navigate} />
            </Container>
        );
    }
}

export default Course;
