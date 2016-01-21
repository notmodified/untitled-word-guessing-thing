"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import search from './search';
import randomWords from './random-words';
import emo from 'emojione';

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
    const icons = this.props.words.map(e => {
      // nicked from https://github.com/Ranks/emojione/blob/master/lib/js/emojione.js:245
      const unicode = emo.emojioneList[e][emo.emojioneList[e].length-1];
      const path = emo.imagePathPNG + unicode + '.png' + emo.cacheBustParam;
      return <img key={unicode} src={path} className={'emojione'}/>;
    });

    return (
      <div>
        <h1>{words}</h1>
        {icons}
      </div>
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
