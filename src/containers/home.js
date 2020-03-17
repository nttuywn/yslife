import React, { Component } from "react";
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Content, ListItem, Text, Row, Grid, Separator, Container, View } from 'native-base';

import { getProfileRequest } from '../redux/rootAction';

import MScreenHeader from '../components/screen-header';
import MSlideShow from '../components/slide-show';
import MNavigation from '../components/navigation';

import { myDayState } from '../helper/mock-data';
const { IconHeaderWithRedux } = MScreenHeader;
const { Carousel } = MSlideShow;
const { NavigationBar } = MNavigation;

class Home extends Component {

    componentDidMount() {
        this.props.getProfileRequest();
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <IconHeaderWithRedux title='YS Life' navigation={navigation} icon="sign-out" transparent={true} />
                <ScrollView>
                    <Content>
                        <ListItem>
                            <Carousel />
                        </ListItem>
                        <Separator bordered>
                            <Text>My Day:</Text>
                        </Separator>
                        <ListItem>
                            <Grid>
                                <Row><Text>Calories: {myDayState.Calories}</Text></Row>
                                <Row><Text>Attendance Status: {myDayState.AttendanceStatus}</Text></Row>
                            </Grid>
                        </ListItem>

                        <Separator bordered>
                            <Text>Other Contents:</Text>
                        </Separator>
                        <ListItem>
                            <Text>Training Expertise</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Your Success is Our Goal</Text>
                        </ListItem>
                        <Separator bordered>
                            <Text>Other Contents:</Text>
                        </Separator>
                        <ListItem>
                            <Text>Training Expertise</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Your Success is Our Goal</Text>
                        </ListItem>
                    </Content>
                </ScrollView>
                <NavigationBar navigate={navigation.navigate} />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { profile } = state;
    return { profile }
}

const mapStateToDispatch = (dispatch) =>
    bindActionCreators(
        {
            getProfileRequest
        },
        dispatch
    );

const connectedHome = connect(mapStateToProps, mapStateToDispatch)(Home)

export default connectedHome;
