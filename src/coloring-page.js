import littleGuyFillSvg from './coloring/little-guy.js';
import loadHeader from './header-component.js';
import littleDude from '../assets/little-dude.js';

const head = document.getElementById('head');

const coloringContainer = document.getElementById('coloring-container');

loadHeader();

const template = document.createElement('template');
template.innerHTML = littleDude;
const littleDudeDom = template.content;

const paths = littleDudeDom.querySelectorAll('path');

paths.forEach(path => {
    path.addEventListener('click', () => {
        console.log(path, 'click');
    });
});
const circles = littleDudeDom.querySelectorAll('circle');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        console.log(circle, 'click');
    });
});
const polygons = littleDudeDom.querySelectorAll('polygon');

polygons.forEach(polygon => {
    polygon.addEventListener('click', () => {
        console.log(polygon, 'click');
    });
});

coloringContainer.appendChild(littleDudeDom);

// const color = 'hex code';

// head.addEventListener('click', () => {
//     head.setAttribute('fill', '#c842f4');
// });

// littleGuyFillSvg();