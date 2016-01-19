"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import search from './search';
import randomWords from './random-words';

const moreWordsAndImages = () => {
  const words = randomWords(3);
  return search(words.join(' ')).then(images => {
    return Promise.resolve({images, words});
  });
};

const Main = React.createClass({
  componentDidMount () {
    this.handleSearch();
  },
  getInitialState () {
    return {images: [], words: []};
  },
  handleSearch () {
    moreWordsAndImages().then(d => this.setState(d));
  },
  render () {
    return (
      <div>
        <Words words={this.state.words}/>
        <Input handleSearch={this.handleSearch}/>
        <List values={this.state.images}/>
      </div>
    );
  }
})

const Words = React.createClass({
  render () {
    const words = this.props.words.join(' ');
    return (
      <h1>{words}</h1>
    );
  }
});

const List = React.createClass({
  render () {
    const items = this.props.values.map((e, i) => <li key={i}><img src={e} /></li>);
    return (
      <ul>
        {items}
      </ul>
    );
  }
});

const Input = React.createClass({
  render () {
    return (
      <div>
        <button onClick={this.props.handleSearch}>again again</button>
      </div>
    );
  }
});

ReactDOM.render(<Main/>, document.querySelector('section'));
