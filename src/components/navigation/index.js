import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Button,
    Footer,
    FooterTab,
    Text,
} from "native-base";

const style = {
    icon: {
        color: '#fff',
    },
    text: {
        fontSize: 8
    },
};

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,
            tab5: false,
        };
    }
    toggleTab1(navigate) {
        this.setState({
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
        });
        navigate('Home');
    }
    toggleTab2(navigate) {
        this.setState({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false,
            tab5: false,
        });
        navigate('Diary')
    }
    toggleTab3(navigate) {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,
            tab5: false,
        });
        navigate('Course');
    }
    toggleTab4(navigate) {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true,
            tab5: false,
        });
        navigate('Challenge');
    }
    toggleTab5(navigate) {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: true,
        });
    }
    render() {
        const { navigate } = this.props;
        return (
            <Footer>
                {/* <Text>asd</Text> */}
                <FooterTab>
                    <Button active={this.state.tab1} onPress={() => this.toggleTab1(navigate)}>
                        <Icon style={style.icon} active={this.state.tab1} name="home" />
                        <Text style={style.text}>Home</Text>
                    </Button>
                    <Button active={this.state.tab2} onPress={() => this.toggleTab2(navigate)}>
                        <Icon style={style.icon} active={this.state.tab1} name="calendar" />
                        <Text style={style.text}>Diary</Text>
                    </Button>
                    <Button active={this.state.tab3} onPress={() => this.toggleTab3(navigate)}>
                        <Icon style={style.icon} active={this.state.tab1} name="book" />
                        <Text style={style.text}>Course</Text>
                    </Button>
                    <Button active={this.state.tab4} onPress={() => this.toggleTab4(navigate)}>
                        <Icon style={style.icon} active={this.state.tab1} name="trophy" />
                        <Text style={style.text}>Challenge</Text>
                    </Button>
                    <Button active={this.state.tab5} onPress={() => this.toggleTab5(navigate)}>
                        <Icon style={style.icon} active={this.state.tab1} name="users" />
                        <Text style={style.text}>Trainers</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default MNavigation = {
    NavigationBar,
};
