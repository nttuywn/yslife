import React, { Component } from "react";
import { Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DeckSwiper, View, Text, Container, Button, Grid, Col } from "native-base";

const cardOne = require("../../../assets/swiper-1.png");
const cardTwo = require("../../../assets/swiper-2.png");
const cardThree = require("../../../assets/swiper-3.png");
const cardFour = require("../../../assets/swiper-4.png");

const cards = [
    { image: cardOne },
    { image: cardTwo },
    { image: cardThree },
    { image: cardFour }
];
let autoSwipe;


class Carousel extends Component {

    componentDidMount() {
        const deckSwiper = this._deckSwiper;
        autoSwipe = setInterval(() => deckSwiper._root.swipeLeft(), 3000);
    }

    componentWillUnmount(){
        clearInterval(autoSwipe);
    }

    render() {
        const { images } = this.props
        return (
            <Container style={{height: 190}}>
                {/* <Grid> */}
                    {/* <Col size={1}><Button><Icon name='arrow-left' /></Button>
                    </Col> */}
                    {/* <Col size={8}> */}
                        <DeckSwiper
                            dataSource={images ? images : cards}
                            looping={true}
                            ref={e => this._deckSwiper = e}
                            renderItem={item =>
                                <Image
                                    style={{
                                        resizeMode: "cover",
                                        width: null,
                                        flex: 1,
                                        height: 185
                                    }}
                                    source={item.image}
                                />
                            }
                        />
                    {/* </Col>
                    <Col size={1}><Button><Icon name='arrow-right' /></Button></Col> */}
                {/* </Grid> */}
            </Container>
        );
    }
}

export default MSlideShow = {
    Carousel
};
