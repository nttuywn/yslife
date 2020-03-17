import React, { Component } from "react";
import { ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Content, ListItem, Text, Row, Grid, Separator, Container } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MButton from '../components/button';

import { attributes } from '../helper/mock-data';
const { BackHeader } = MScreenHeader;
const { RedirectButton } = MButton;

const initExercise = {
    ex_name: '',
    attributes: [],
    image: 'https://images.pexels.com/photos/1430117/pexels-photo-1430117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

class TopmenuProfile extends Component {
    render() {

        const { navigation } = this.props;
        const exercise = navigation.getParam('data', initExercise);
        const previous = navigation.getParam('previous', '');
        const { navigate } = navigation;
        return (
            <Container>
                <BackHeader navigation={navigation} text='ExerciseDetails' />
                <Content>
                    <ListItem itemDivider>
                        {attributes.filter(item => exercise.attributes.includes(item.id))
                            .map(option => <Text style={{ fontSize: 13, marginLeft: 5 }}>{option.type}</Text>)}
                    </ListItem>
                    <ListItem>
                        <Image source={{ uri: exercise.image }} style={{ width: '100%', height: 180 }} />
                    </ListItem>
                    <ListItem itemDivider>
                        <Grid>
                            <Row><Text>{exercise.ex_name}</Text></Row>
                            <Row><Text style={{ fontSize: 13 }}>{exercise.ex_description}</Text></Row>
                        </Grid>
                    </ListItem>
                </Content>
                { previous === 'challenge' && <RedirectButton style={{ margin: 20 }} text='Set Up' full={true} info={true} link='DiaryDiet' navigate={navigate} />}
            </Container>
        );
    }
}

export default TopmenuProfile;
