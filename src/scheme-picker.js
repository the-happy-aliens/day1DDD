import loadHeader from './header-component.js';
import loadColorDisplay from './scheme/color-display-component.js';
import { createSchemeUrl } from './scheme/create-scheme-url.js';
import { createColorArray } from './scheme/create-color-array.js';

loadHeader();

const colorSchemeGenerator = document.getElementById('color-scheme-generator');
const randomColorSeedButton = document.getElementById('random-color-seed');
const colorSeed = document.getElementById('color-picker');
const schemeTypeSelect = document.getElementById('scheme-type');
const schemeColorAmount = document.getElementById('scheme-color-amount');

randomColorSeedButton.addEventListener('click', () => {
    colorSeed.value = '#' + (16777216 + (Math.random()) * 16777215).toString(16).substr(1, 6);
});

schemeTypeSelect.addEventListener('change', () => {
    switch(schemeTypeSelect.value) {
        case 'complement':
            schemeColorAmount.hidden = true;
            schemeColorAmount.value = 2;
            break;
        case 'triad':
            schemeColorAmount.hidden = true;
            schemeColorAmount.value = 3;
            break;
        case 'quad':
            schemeColorAmount.hidden = true;
            schemeColorAmount.value = 4;
            break;
        default:
            schemeColorAmount.value = 5;
            schemeColorAmount.hidden = false;
            break;
    }
});

colorSchemeGenerator.addEventListener('submit', event => {
    event.preventDefault();
    const colorSchemeGeneratorData = new FormData(colorSchemeGenerator);
    const color = colorSchemeGeneratorData.get('color-picker').slice(1);
    const schemeOptions = {
        originalColor: [color],
        scheme: colorSchemeGeneratorData.get('scheme-type'),
        count: Number(colorSchemeGeneratorData.get('scheme-color-amount'))
    };
    const url = createSchemeUrl(schemeOptions);
    loadColorDisplay(schemeOptions.originalColor);
    fetch(url)
        .then(response => response.json())
        .then(body => {
            const colors = createColorArray(body);
            colors.unshift(color);
            loadColorDisplay(colors);
            console.log(colors);
        });
});