import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Item,
    Label,
    Input,
    Form,
    Text,
    Body,
} from "native-base";
import styles from "./styles";

class Login extends Component {
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
                        <Item inlineLabel>
                            <Label>Username</Label>
                            <Input/>
                        </Item>
                        <Item inlineLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry/>
                        </Item>
                    </Form>

                    <Button onPress={() => this.props.navigation.navigate("LoginInfomation")} block
                            style={{margin: 15, marginTop: 50}}>
                        <Text>Sign In</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Login;
