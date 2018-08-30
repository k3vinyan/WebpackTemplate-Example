import sum from './sum';
import './main.css';
import small from '../assets/small.jpg';
import big from '../assets/large.jpeg';


const total = sum(1, 5);

const div = document.createElement('div');

div.innerHTML = total;

const img1 = document.createElement('img');
const img2 = document.createElement('img');

img1.src = small;
img2.src = big;

document.body.appendChild(div);
document.body.appendChild(img1);
document.body.appendChild(img2);
