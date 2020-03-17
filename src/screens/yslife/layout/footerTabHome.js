import React, { Component } from "react";
import {FooterTab, Button, Text, Icon } from "native-base";
class FooterTabHome extends Component {
    active: String = "home";
    isActive: String;
    constructor(props) {
        super();
        this.active = props.isActive;
    }

    render() {
        return (
            <FooterTab>
                <Button vertical active={this.active === "Home"} >
                    <Icon name="apps" />
                    <Text>Home</Text>
                </Button>
                <Button vertical active={this.active === "Diary"}>
                    <Icon name="camera" />
                    <Text>Diary</Text>
                </Button>
                <Button vertical active={this.active === "Course"}>
                    <Icon active name="navigate" />
                    <Text>Course</Text>
                </Button>
                <Button vertical active={this.active === "Challenge"}>
                    <Icon name="person" />
                    <Text>Challenge</Text>
                </Button>
                <Button vertical active={this.active === "Trainer"}>
                    <Icon name="person" />
                    <Text>Trainer</Text>
                </Button>
            </FooterTab>
        );
    }
}
export default FooterTabHome;
