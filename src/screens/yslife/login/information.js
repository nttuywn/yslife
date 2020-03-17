import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Form,
    Text,View,
    Body, Left, Right, Radio,
} from "native-base";
import styles from "./styles";

class LoginInfomation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio1: false,
            radio2: false,
            radio3: false,
            radio4: true
        };
    }
    toggleRadio(radio) {
        let json = {};
        switch (radio) {
            case 1:
                json = {
                    radio1: true,
                    radio2: false
                };
                break;
            case 2:
                json = {
                    radio1: false,
                    radio2: true
                };
                break;
        }
        this.setState(json);
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title style={styles.headline}>Login</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <View style={{textAlign : 'center'}}>
                            <Text onPress={() => this.toggleRadio(1)}>Male</Text>
                            <Radio onPress={() => this.toggleRadio(1)} selected={this.state.radio1}/>
                            <Text onPress={() => this.toggleRadio(2)}>Female</Text>
                            <Radio onPress={() => this.toggleRadio(2)} selected={this.state.radio2}/>
                        </View>
                    </Form>
                    <Button onPress={() => this.props.navigation.navigate("Home")} block
                            style={{margin: 15, marginTop: 50}}>
                        <Text>Confirm</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default LoginInfomation;
