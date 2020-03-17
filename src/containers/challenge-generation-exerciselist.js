import React, { Component } from "react";
import { Container, Content, Accordion, Item, Input } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MList from '../components/list';
import { tabsExerciseDictionary, exerciseList } from '../helper/mock-data';

const { ThumbnailList } = MList;
const { BackHeader } = MScreenHeader;

const filter = [
    {
        title: 'filter',
    }
]
const customContent = () => <Item regular><Input /></Item>

class ChallengeGenerationExerciseList extends Component {
    render() {

        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader navigation={navigation} text='Exercise List' />
                <Content>
                    <Accordion dataArray={filter} renderContent={customContent} headerStyle={{ marginLeft: '43%' }} />
                    <ThumbnailList datas={exerciseList} icon='star' navigation={navigation} link='ExerciseDetails' previous='challenge' />
                </Content>
            </Container>
        );
    }
}

export default ChallengeGenerationExerciseList;
