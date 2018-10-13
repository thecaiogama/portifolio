import React, { Component } from 'react';
import PostFeed from './components/PostFeed';
import Contact from './components/Contact';
import 'tachyons/css/tachyons.min.css';

import './App.css';

class App extends Component {
  state = {
    contatctEmail: 'thecaiogama@gmail.com'
  };

  render() {
    const { contatctEmail } = this.state;
    return (
      <div className="App">
        <header>
          <p>Hi, welcome</p>
          <p>
            I am Caio Gama, skater, scientist and (sometimes){' '}
            <a href="https://www.instagram.com/thecaiogama/" target="_blank">
              drawer
            </a>{' '}
            based in São Paulo. I also{' '}
            <a href="https://github.com/thecaiogama" target="_blank">
              do some coding
            </a>
            , and work as an{' '}
            <a href="https://www.linkedin.com/in/thecaiogama" target="_blank">
              user researcher @ Nubank
            </a>
          </p>
        </header>
        <PostFeed />
        <Contact email={contatctEmail} />
      </div>
    );
  }
}

export default App;
