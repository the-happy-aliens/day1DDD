import loadHeader from './header-component.js';
import loadColorDisplay from './scheme/color-display-component.js';
import { createSchemeUrl } from './scheme/create-scheme-url.js';
import { createColorArray } from './scheme/create-color-array.js';
import { auth, usersRef } from './firebase.js';

const colorSchemeGenerator = document.getElementById('color-scheme-generator');
const randomColorSeedButton = document.getElementById('random-color-seed');
const colorSeed = document.getElementById('color-picker');
const schemeTypeSelect = document.getElementById('scheme-type');
const schemeColorAmount = document.getElementById('scheme-color-amount');
const quizColorSpan = document.getElementById('quiz-color');
const quizHexSpan = document.getElementById('quiz-hex');

loadHeader();

if(window.location.hash === '#fromQuiz=true') {

    auth.onAuthStateChanged(user => {
        const userId = user.uid;
        const userProfile = usersRef.child(userId);
        const quizColorRef = userProfile.child('quizResult');
        quizColorRef.once('value')
            .then(snapshot => {
                const quizResult = snapshot.val();
                console.log(quizResult.quizColor);
                quizColorSpan.textContent = quizResult.quizColor;
                quizHexSpan.textContent = quizResult.quizHex;
                colorSeed.value = '#' + quizResult.quizHex;
                const quizSchemeOptions = {
                    originalColor: [quizResult.quizHex],
                    scheme: 'analogic',
                    count: 5
                };
                const quizUrl = createSchemeUrl(quizSchemeOptions);
                fetch(quizUrl)
                    .then(response => response.json())
                    .then(body => {
                        const quizColors = createColorArray(body);
                        quizColors.unshift(quizResult.quizHex);
                        loadColorDisplay(quizColors, quizSchemeOptions);
                    });
            });
    });
}

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
    console.log(schemeOptions);
    const url = createSchemeUrl(schemeOptions);

    fetch(url)
        .then(response => response.json())
        .then(body => {
            const colors = createColorArray(body);
            colors.unshift(color);
            loadColorDisplay(colors, schemeOptions);
        });
});