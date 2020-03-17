import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem, Thumbnail, Body, Left, Right, Button, Text } from "native-base";

import { attributes } from '../../helper/mock-data';

class ThumbnailList extends Component {

    render() {
        const { datas, navigation, icon, link, previous = ''} = this.props;
        return (
            <List
                dataArray={datas}
                renderRow={data =>
                    <ListItem thumbnail onPress={() => navigation && navigation.navigate(link, { data, previous })}>
                        <Left>
                            <Thumbnail square source={{ uri: data.image }} />
                        </Left>
                        <Body>
                            <Text>
                                {data.ex_name || data.name}
                            </Text>
                            {data.attributes && attributes.filter(item => data.attributes.includes(item.id))
                                .map(option => <Text style={{ fontSize: 10 }}>{option.type}</Text>)}
                            {data.dateStart && <Text numberOfLines={1} note>
                                {`${data.dateStart} ~ ${data.dateEnd}`}
                            </Text>}
                            {data.course_name && <Text>{`${data.course_name} ${data.status} `}</Text>}
                            {data.phone && <Text>{data.phone}</Text>}
                        </Body>
                        <Right>
                            <Button transparent>
                                {icon && <Icon name={icon} style={{ color: '#FFEAA5', fontSize: 18 }} />}
                                {data.member && <Text>{data.member.length}</Text>}
                            </Button>
                        </Right>
                    </ListItem>}
            />
        );
    }
}

export default MList = {
    ThumbnailList
};
