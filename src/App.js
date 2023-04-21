import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import PDFPreview from './Components/PDFPreview';
import './App.css';

// Create styles
const styles = StyleSheet.create({
  pdfViewer: {
    backgroundColor: "white important!"
  }
});
const App = () => (
  <div className = "home-container">
    <div className = "nav">
        <h2>Toolbar</h2>
        <label className='newline-label'>Products per page</label>
        <select value={2}>
            <option>2</option>
            <option>4</option>
            <option>6</option>
        </select>

        <label>Add Products</label>
        <input type="button" value={"+"}/>
    </div>
    <PDFViewer style={styles.pdfViewer} width={"100%"} showToolbar={true}>
      <PDFPreview />
    </PDFViewer>
  </div>
  
);

export default App;
