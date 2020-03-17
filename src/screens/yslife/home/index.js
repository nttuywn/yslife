import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Footer,
    Left,
    Right,
    Body
} from "native-base";
import FooterTabHome from "../layout/footerTabHome";
import styles from "./styles";

class Home extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content />
                <Content padder>
                    <Text>Content goes here (internal)</Text>
                </Content>

                <Footer>
                    <FooterTabHome isActive={"Home"} />
                </Footer>
            </Container>
        );
    }
}
export default Home;
