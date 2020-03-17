import React, { Component } from "react";
import { ScrollView, Image } from 'react-native';
import { Container, Content, Form } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MForm from '../components/form';
import { piAttributes } from '../helper/mock-data';

const { BackHeader } = MScreenHeader;
const { BodyInfo, Picture } = MForm;

const customStyle = {
    mt10: {
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 5,
        height: 40,
        width: '80%',
        marginLeft: '10%'
    },
}

class DiaryBody extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader title='Body' navigation={navigation} />
                <Content padder>
                    <Form>
                        {piAttributes.map(item => <BodyInfo style={customStyle.mt10} label={item.label} />)}
                        <Picture />
                    </Form>
                    <Image  style={{marginLeft: 15, width: '90%', height: 180}} text='Picture:'
                    source={{uri: 'https://images.pexels.com/photos/1497778/pexels-photo-1497778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} />
                </Content>
            </Container>
        );
    }
}

export default DiaryBody;
