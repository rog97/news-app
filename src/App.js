import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import key from './key.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      apiData: null,
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`)
    .then(res => res.json())
    .then(json => this.setState({
      apiData: json.articles,
      isLoaded: true
    }));

  }

  renderList() {
    if (this.state.isLoaded) {
      return <List apiData={this.state.apiData} />;
    } else {
      return <p>Loading...</p>;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
          <main>
            {this.renderList()}
          </main>
        <Footer />
      </div>
    );
  }
}

export default App;
