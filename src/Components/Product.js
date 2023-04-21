import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const Product = props => {
    return <View style={props.style.section}>
        <Text>Section {props.index}</Text>
        <Image style={props.style.imageStyle} src={props.src} cache/>
    </View>;
};

Product.propTypes = {};

export { Product };