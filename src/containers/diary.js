import React, { Component } from "react";
import { ScrollView, Alert } from 'react-native';
import { Container, Content, Tabs, Tab, Row, Grid, Text } from 'native-base';
import { Calendar } from 'react-native-calendars';

import MScreenHeader from '../components/screen-header';
import MTab from '../components/tabs';
import MNavigation from '../components/navigation';

const { IconHeader } = MScreenHeader;
const { NavigationBar } = MNavigation;
const { ScrollTabs } = MTab;

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'red' };
const massage = { key: 'massage', color: 'yellow', selectedDotColor: 'yellow' };
const workout = { key: 'workout', color: 'green' };

class Diary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            daySelected: '',
            monthSelected: '',
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <IconHeader title='YS Life' navigation={navigation} icon="sign-out" transparent={true} />
                <Content>
                    <Grid>
                        <Row>
                            <Calendar
                                style={{ width: '100%' }}
                                current={'2019-04-24'}
                                minDate={'2012-05-10'}
                                maxDate={'2030-12-31'}
                                onDayPress={(day) => this.setState({ daySelected: day.dateString })}
                                monthFormat={'yyyy MM dddd'}
                                onMonthChange={(month) => { console.log('selected day', month) }}
                                hideArrows={false}
                                hideExtraDays={true}
                                disableMonthChange={false}
                                // firstDay={1}
                                hideDayNames={false}
                                showWeekNumbers={false}
                                onPressArrowLeft={substractMonth => substractMonth()}
                                onPressArrowRight={addMonth => addMonth()}
                                markedDates={{
                                    '2019-04-01': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                                    '2019-04-10': { dots: [massage, workout], disabled: true },
                                }}
                                markingType='multi-dot'
                            />
                        </Row>
                        <Row>
                            <Tabs>
                                <Tab heading="Body">
                                    <Grid>
                                        <Row><Text>{`${this.state.daySelected}`}</Text></Row>
                                        <Row><Text onPress={() => navigation.navigate('DiaryBody')}>Member Comment: Good - Touch here to go to Body tab</Text></Row>
                                        <Row><Text>Trainer Comment: Nice try</Text></Row>
                                    </Grid>
                                </Tab>
                                <Tab heading="Diet">
                                    <Grid>
                                        <Row><Text>{`${this.state.daySelected}`}</Text></Row>
                                        <Row><Text onPress={() => navigation.navigate('DiaryDiet')}>Member Comment: Good - Touch here to go to Diet tab</Text></Row>
                                        <Row><Text>Trainer Comment: Nice try</Text></Row>
                                    </Grid>
                                </Tab>
                                <Tab heading="Exercise">
                                    <Grid>
                                        <Row><Text>{`${this.state.daySelected}`}</Text></Row>
                                        <Row><Text onPress={() => navigation.navigate('DiaryExercise')}>Member Comment: Good - Touch here to go to Exercise tab</Text></Row>
                                        <Row><Text>Trainer Comment: Nice try</Text></Row>
                                    </Grid>
                                </Tab>
                            </Tabs>
                        </Row>
                    </Grid>
                </Content>
                <NavigationBar navigate={navigation.navigate} />
            </Container>
        );
    }
}

export default Diary;
