import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/gym.png");
const datas = [
  {
    name: "Profile",
    route: "TopmenuProfile",
    icon: "user",
    bg: "#C5F442"
  },
  {
    name: "Exercise Dictionary",
    route: "TopmenuExercisedictionary",
    icon: "fist-raised",
    bg: "#C5F442"
  },
  {
    name: "Reference Room",
    route: "TopmenuArchive",
    icon: "trophy",
    bg: "#C5F442"
  },
  {
    name: "Events",
    route: "TopmenuEvent",
    icon: "archive",
    bg: "#C5F442"
  },
  {
    name: "Settings",
    route: "Settings",
    icon: "cogs",
    bg: "#C5F442"
  },
  {
    name: "Question / Anwser",
    route: "QuestionAnwser",
    icon: "question-circle",
    bg: "#C5F442"
  },
  {
    name: "App Information",
    route: "ReferenceRoom",
    icon: "info-circle",
    bg: "#C5F442"
  },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 20, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
