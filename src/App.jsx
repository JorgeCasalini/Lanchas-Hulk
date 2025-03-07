import React, { Component } from "react";
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import Itinerary from './components/Itinerary';
import Product from './components/Product';
import axios from 'axios';  // Certifique-se de importar o axios

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
        <Product lanchasJetSki={this.state.lanchasJetSki} />  {/* Passando os dados para o Product */}
      </>
    );
  }
}

export default App;
