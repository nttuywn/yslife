import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Grid, Text, Col } from "native-base";

import { attributes } from '../../helper/mock-data';

class Pagination extends Component {

    render() {
        const { datas, navigation } = this.props;
        return (
            <Grid>
                {/* <Col size={1}/>
                <Col size={10}>
                    <Text>{`< `}</Text>
                    <Text>1/5</Text>
                    <Text>{` >`}</Text>
                </Col>
                <Col size={1}/> */}
            </Grid>
        );
    }
}

export default MPagination = {
    Pagination
};
