import React, { Component } from "react";
import { ScrollView, Image } from 'react-native';
import { Container, Content, Form, Card, CardItem, Grid, Row, Text, Button } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MForm from '../components/form';
import MButton from '../components/button';
import MealForm from '../components/meal-form';
import { day_of_week } from '../helper/mock-data';

const { BackHeader } = MScreenHeader;
const { BodyInfo, Picture } = MForm;
const { ActionButton, RedirectButton } = MButton;

const ml50 = {
    marginLeft: '45%',
    width: 30
}

class DietSettings extends Component {
    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        return (
            <Container>
                <BackHeader text='Diet' navigation={navigation} title='Caculator' />
                <Content padder>
                    <Card>
                        <CardItem>
                            <Grid>
                                <Row><Text>Recomemended amount of Kcal: 2000 Kcal</Text></Row>
                                <Row><Text>Recomemended carbohydrate content: 500g</Text></Row>
                                <Row><Text>Recomemended amount of protein: 500g</Text></Row>
                            </Grid>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Grid>
                                <Row>{day_of_week.map(day =>
                                    <Button info transparent style={{ marginLeft: 3 }} >
                                        <Text style={{ fontSize: 12 }}>{day}</Text>
                                    </Button>)}</Row>
                                <Row><MealForm /></Row>
                                <Row><ActionButton style={ml50} icon='plus' block={false} /></Row>
                            </Grid>
                        </CardItem>
                    </Card>
                </Content>
                <RedirectButton style={{ margin: 20 }} text='Set Up' full={true} info={true} link='DiaryDiet' navigate={navigate} />
            </Container >
        );
    }
}

export default DietSettings;
