import React, { Component } from "react";
import { ScrollView, Image } from 'react-native';
import { Container, Content, Form } from 'native-base';

import MScreenHeader from '../components/screen-header';
import MForm from '../components/form';
import MButton from '../components/button';
import Meal from '../components/meal';
import { goal_meal, performed_meal } from '../helper/mock-data';

const { BackHeader } = MScreenHeader;
const { BodyInfo, Picture } = MForm;
const { ActionButton } = MButton;

const ml50 = {
    marginLeft: '45%',
    width: 30
}

class DiaryDiet extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <BackHeader text='Diet' navigation={navigation} />
                <Content padder>
                    <ActionButton text='Set up your diet' block={true} onAction={() => navigation.navigate('DietSettings')}/>
                    {goal_meal.map((meal,index) => <Meal meal={meal} permeal={performed_meal[index]} navigation={navigation} />)}
                    <ActionButton style={ml50} icon='plus' block={false} onAction={() => navigation.navigate('EnterMeal')}/>
                </Content>
            </Container>
        );
    }
}

export default DiaryDiet;
