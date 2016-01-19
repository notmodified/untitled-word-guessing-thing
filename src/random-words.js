"use strict";

import nounlist from './nounlist';
import * as R from 'ramda';

const max = nounlist.length;
const min = 0;

const randomIndex = () => Math.floor(Math.random() * max);

const randomWord = () => nounlist[randomIndex()];

export default R.times(randomWord);
