import React, { Component } from "react";
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import Itinerary from './components/Itinerary';
import Product from './components/Product';
import About from "./components/About";
import Footer from "./components/Footer";
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    lanchasJetSki: [],
  };

  // Método que vai buscar os dados da API
  async componentDidMount() {
    try {
      const { data: lanchasJetSki } = await axios.get("/api/todasAsLanchas.json");
      this.setState({ lanchasJetSki });  // Armazena os dados no estado
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Carrousel />
        <Itinerary />
        <Product lanchasJetSki={this.state.lanchasJetSki} /> 
        <About />
        <Footer />
      </>
    );
  }
}

export default App;
