import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Content, View, Fab, Button, Text } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MForm from '../components/form';
import MButton from '../components/button';
import MList from '../components/list';
import { challenge_list } from '../helper/mock-data';

const { BackHeader, } = MScreenHeader;
const { ThumbnailList } = MList;
const { RedirectButton } = MButton;

const style = {
    color: '#fff'
}

class YourChallenge extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader text='Your Challenge' navigation={navigation} icon='ellipsis-v' />
                <Content >
                    <ThumbnailList datas={challenge_list} link='CustomChallengeDetails' navigation={navigation} />
                </Content>
                <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: "#5067FF" }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}
                    >
                        <Icon name="share-alt" />
                        <Button style={{ backgroundColor: "#34A34F" }} onPress={() => navigation.navigate('ChallengeGeneration')}>
                            <Icon style={style} name='plus' />
                        </Button>
                        <Button style={{ backgroundColor: "#3B5998" }}>
                            <Icon style={style} name='copy' />
                        </Button>
                        <Button style={{ backgroundColor: "#DD5144" }} onPress={() => navigation.navigate('GetChallenge')}>
                            <Icon style={style} name='get-pocket' />
                        </Button>
                    </Fab>
                </View>
            </Container>
        );
    }
}

export default YourChallenge;
