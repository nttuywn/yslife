import React, { Component } from "react";
import { Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tab, Tabs, ScrollableTab, Text } from "native-base";

import MList from '../list';

const { ThumbnailList } = MList;

class ScrollTabs extends Component {

    render() {
        const { data, listType, exerciseList, navigation } = this.props
        return (
            <Tabs renderTabBar={() => <ScrollableTab />}>
                {data.map(item =>
                    <Tab heading={item}>
                        {listType === 'thumbnail' ? <ThumbnailList icon='star' link='ExerciseDetails' datas={exerciseList} navigation={navigation}/> : null }
                    </Tab>)}
            </Tabs>
        );
    }
}

export default MTab = {
    ScrollTabs
};
