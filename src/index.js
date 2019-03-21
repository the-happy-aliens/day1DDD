import loadHeader from './header-component.js';

loadHeader();

const prismBox = document.querySelector('.prism-box');
const prismList = document.getElementById('prism-list');

prismBox.addEventListener('click', () => {
    if(prismList.hidden) {
        prismList.hidden = false;
    }
    else {
        prismList.hidden = true;
    }
    
});