import React, { Component } from "react";
import { Alert, CameraRoll, TimePickerAndroid, DatePickerIOS } from 'react-native';
import { Item, Input, Label, Picker, Icon, Button, Text } from "native-base";

import { checkPermission } from '../../helper/permission';

class MText extends Component {
    render() {
        const { handleChange, style, text } = this.props;
        return (
            <Item style={style} >
                <Label>{text}:</Label>
                <Input onChangeText={handleChange}></Input>
            </Item>
        );
    }
}

class MNumber extends Component {
    render() {
        const { handleChange, text } = this.props;
        return (
            <Item>
                <Label>{text}:</Label>
                <Input onChangeText={handleChange} keyboardType="numeric"></Input>
            </Item>
        );
    }
}

class Password extends Component {
    render() {
        const { handleChange, style } = this.props;
        return (
            <Item style={style}>
                <Label>Password:</Label>
                <Input onChangeText={handleChange} textContentType='password' secureTextEntry></Input>
            </Item>
        );
    }
}

class BodyInfo extends Component {
    render() {
        const { handleChange, label, style } = this.props;
        return (
            <Item style={style} regular>
                <Label style={{fontSize: 12}}>{label}:</Label>
                <Input onChangeText={handleChange} keyboardType="numeric"></Input>
            </Item>
        );
    }
}

class Gender extends Component {
    render() {
        const { style } = this.props
        return (
            <Item style={style} regular>
                <Label style={{fontSize: 10}}>Gender:</Label>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Gender"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                >
                    <Item label="Male" value="key0" />
                    <Item label="Female" value="key1" />
                </Picker>
            </Item>
        );
    }
}

class Picture extends Component {
    render() {
        const { text } = this.props;
        return (
            <Item>
                <Label>{text}</Label>
                <Button transparent onPress={() =>
                    checkPermission() && CameraRoll.getPhotos({
                        first: 20,
                        assetType: 'Photos',
                    })
                        .then(r => {
                            Alert.alert(JSON.stringify(r));
                        })
                        .catch((err) => {
                            Alert.alert(err)
                        })
                }>
                    <Text>Add Photo</Text>
                </Button>
            </Item >
        );
    }
}

class MTimePicker extends Component {
    render() {
        const { platform } = this.props;
        return (
            <Item>
                <Label>Time:</Label>
                {platform === 'ios' &&
                    <DatePickerIOS
                        minuteInterval={5}
                        mode='time'
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}
                    />}
                {platform === 'android' &&
                    <Text style={{ fontWeight: '100' }}
                        onPress={async () =>  {
                            try {
                                const { action, hour, minute } = await TimePickerAndroid.open({
                                    hour: 14,
                                    minute: 0,
                                    is24Hour: false, // Will display '2 PM'
                                });
                                if (action !== TimePickerAndroid.dismissedAction) {
                                    Alert.alert(hour + ' ' + minute);
                                }
                            } catch ({ code, message }) {
                                console.warn('Cannot open time picker', message);
                            }
                        }}>
                        Select Time
                    </Text>
                }

            </Item>
        );
    }
}

export default MForm = {
    Password,
    BodyInfo,
    Gender,
    Picture,
    MTimePicker,
    MText,
    MNumber
};
