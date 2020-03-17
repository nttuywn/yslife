import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Text } from 'native-base';
import { Alert } from 'react-native';

class ActionButton extends Component {
    render() {
        const { onAction, text, icon, style } = this.props;
        return (
            <Button rounded info {...this.props}
                onPress={() => onAction()} style={style}>
                {icon && <Icon name={icon} size={20} style={{ color: '#fff', paddingLeft: 8 }} />}
                {text && <Text>{text}</Text>}
            </Button>
        );
    }
}

class RedirectButton extends Component {
    render() {
        const { text, style, navigate, link, icon } = this.props;
        return (
            <Button rounded {...this.props} style={style}
                onPress={() => navigate(link)}>
                <Text style={{ fontSize: 12 }}>{text} { icon && <Icon name='arrow-right'/>}</Text>
            </Button>
        );
    }
}

export default MButton = {
    ActionButton,
    RedirectButton
};