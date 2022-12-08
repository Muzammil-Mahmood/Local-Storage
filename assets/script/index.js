'use strict';


import { onEvent, select } from "./functions";
import { Score } from "./classes";

  
 /* function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  }
  
  function create(element, parent = document) {
    return parent.createElement(element);
  }
  
  function print(element) {
    console.log(element);
  }
  
 export { onEvent, select, selectAll, create, print };
 */



const watch = select('.watch');
const second = select('.second');
const number = select('.score');
const points = select('.points');
const game = select('.game');
const sample = select('.sample');
const text = select('.text');
const btn = select('.btn');

const energetic = new Audio('./assets/media/audio/music.m4a');
energetic.type = 'audio/m4a';


const data = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population', 
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute', 
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle', 
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy', 
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future', 
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency', 
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician', 
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution', 
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music', 
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework', 
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery', 
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow', 
'keyboard', 'window'];


onEvent('click', btn, function() {
  startTimer();
  getWords();
  input = true;

});

let getWords = Math.floor(Math.random()*data.length);
let value = data(getWords);
console.log(value);

