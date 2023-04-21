import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Product } from './Product';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    width: "1000px",
    flexWrap: "wrap"
  },
  section: {
    margin: 10,
    padding: 10,
    height: 200,
    width: 200
  },
  imageStyle: {
    height: 200,
  }
});

// Create Document Component
const PDFPreview = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      {[...Array(100)].map((el,index) => <Product style={styles} index={index} src={`https://picsum.photos/id/${index}/200/300`}/>)}
      {/* <View style={styles.section}>
        <Text>Section #1</Text>
        <Image style={styles.imageStyle}/>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
);

export default PDFPreview;