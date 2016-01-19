"use strict";

import {API_KEY, CX} from './config';

const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&searchType=image&q=`;

export default q => {
  return fetch(URL + encodeURIComponent(q))
    .then(r => r.json())
    .then(r => {
      if (r["items"]) {
        return Promise.resolve(r["items"].map(i => i["image"]["thumbnailLink"]));
      } else {
        return Promise.resolve([]);
      }
    })
    .catch(r => console.log(r));
};
