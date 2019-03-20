import littleGuyFillSvg from './coloring/little-guy.js';
import loadHeader from './header-component.js';
import littleDude from '../assets/little-dude.js';
// import weirdLady from '../assets/weird-lady.js';

const coloringContainer = document.getElementById('coloring-container');

loadHeader();

let coloringColor;

const colors = document.querySelectorAll('.palette-color');
colors.forEach(color => {
    color.addEventListener('click', () => {
        console.log(color.style.backgroundColor);
        coloringColor = color.style.backgroundColor;
    });
});

const template = document.createElement('template');
template.innerHTML = littleDude;
const littleDudeDom = template.content;

const paths = littleDudeDom.querySelectorAll('path');

paths.forEach(path => {
    path.addEventListener('click', () => {
        path.setAttribute('fill', coloringColor);
    });
});
const circles = littleDudeDom.querySelectorAll('circle');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        circle.setAttribute('fill', coloringColor);
    });
});
const polygons = littleDudeDom.querySelectorAll('polygon');

polygons.forEach(polygon => {
    polygon.addEventListener('click', () => {
        polygon.setAttribute('fill', coloringColor);
    });
});

coloringContainer.appendChild(littleDudeDom);