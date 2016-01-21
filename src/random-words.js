"use strict";

import * as emo from 'emojione';
import * as R from 'ramda';

const list = emo.shortnames
  .split('|')
  .filter(e => e.indexOf('_') === -1)
  .filter(e => e.length > 4); // > :uk: :de: :o: etc..

const max = list.length;
const min = 0;

const randomIndex = () => Math.floor(Math.random() * max);

const randomWord = () => list[randomIndex()];

export default R.times(randomWord);
