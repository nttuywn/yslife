import React, { Component } from "react";
import { Content, Container } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MPagination from '../components/pagination';
import MList from '../components/list';

import { eventList } from '../helper/mock-data';
const { BackHeader } = MScreenHeader;
const { ThumbnailList } = MList;
const { Pagination } = MPagination;

class TopmenuEvent extends Component {
    render() {

        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader navigation={navigation} title='Event' />
                <Content>
                    <ThumbnailList icon='star' datas={eventList} />
                </Content>
                <Pagination />
            </Container>
        );
    }
}

export default TopmenuEvent;
