import React, { Component } from "react";
import Navbar from './components/Navbar';
import Carrousel from './components/Carousel';
import Itinerary from './components/Itinerary';
import Product from './components/Product';
import About from "./components/About";
import Doubts from "./components/Doubts";
import Footer from "./components/Footer";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import './App.css';

class App extends Component {
  state = {
    lanchasJetSki: [],
    perguntasFrequentes: []
  };

  // Método que vai buscar os dados da API
  async componentDidMount() {
    try {
      const { data: lanchasJetSki } = await axios.get("/api/todasAsLanchas.json");

      const { data: perguntasFrequentes } = await axios.get("/api/perguntasFrequentes.json");

      this.setState({
        lanchasJetSki: Array.isArray(lanchasJetSki) ? lanchasJetSki : [],
        perguntasFrequentes: Array.isArray(perguntasFrequentes) ? perguntasFrequentes : []
      });
    } catch (error) {
      console.log("Erro ao carregar os dados:", error);
      this.setState({ perguntasFrequentes: [] }); // Garante que não seja undefined
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
        <Doubts perguntasFrequentes={this.state.perguntasFrequentes} />
        <Footer />
      </>
    );
  }
}

export default App;
