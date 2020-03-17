import React, { Component } from "react";
import { Header, Left, Right, Body, Title, Icon, Button } from "native-base";
import { connect } from 'react-redux';
import MButton from '../button';
import { Logout } from '../../redux/actions';

const { ActionButton } = MButton;

class OnlyTitle extends Component {
    render() {
        const { title } = this.props;
        return (
            <Header>
                <Body>
                    <Title style={{ fontSize: 15, marginLeft: '25%' }}>{title}</Title>
                </Body>
            </Header>
        );
    }
}

class IconHeader extends Component {
    render() {
        const { title, icon, transparent, navigation, Logout } = this.props;
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.openDrawer()}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    <ActionButton
                        onAction={() => {
                            Logout();
                            return navigation.navigate('Login')
                        }}
                        icon={icon} transparent={transparent}
                    />
                </Right>
            </Header>
        );
    }
}

class BackHeader extends Component {
    render() {
        const { title, navigation, text, icon } = this.props;
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{text}</Title>
                </Body>
                <Right>
                    {(title || icon) && <ActionButton transparent icon={icon} text={title} />}
                </Right>
            </Header>
        );
    }
}

const mapStateToProps = (state) => state.login;
const IconHeaderWithRedux = connect(mapStateToProps, { Logout })(IconHeader);

export default MScreenHeader = {
    OnlyTitle,
    IconHeaderWithRedux,
    BackHeader
};
