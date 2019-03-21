import loadHeader from './header-component.js';
import coloringImages from '../assets/svg-list.js';
import { auth, usersFavoriteColorSchemesRef } from './firebase.js';
import { loadSchemesList } from './coloring-component.js';
import { convertObjectToArray } from './favorite-component.js';
const coloringContainer = document.getElementById('coloring-container');

loadHeader();

let coloringColor;

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = usersFavoriteColorSchemesRef.child(userId);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const favoriteSchemesIds = Object.keys(data);
            const favoriteSchemes = convertObjectToArray(data);
            loadSchemesList(favoriteSchemesIds, favoriteSchemes, updateColor => {
                coloringColor = updateColor;
            });
        });
});





const svgThumbOne = document.getElementById('one');
const svgThumbTwo = document.getElementById('two');

svgThumbOne.addEventListener('click', () => {
    clearColoringContainer();
    const template = document.createElement('template');
    template.innerHTML = coloringImages[0];
    const coloringDom = template.content;
    coloringContainer.appendChild(coloringDom);

    const rects = coloringDom.querySelectorAll('rect');

    rects.forEach(rect => {
        rect.addEventListener('click', () => {
            rect.setAttribute('fill', coloringColor);
        });
    });

    const paths = coloringDom.querySelectorAll('path');

    paths.forEach(path => {
        path.addEventListener('click', () => {
            path.setAttribute('fill', coloringColor);
        });
    });
    const circles = coloringDom.querySelectorAll('circle');

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            circle.setAttribute('fill', coloringColor);
        });
    });
    const polygons = coloringDom.querySelectorAll('polygon');

    polygons.forEach(polygon => {
        polygon.addEventListener('click', () => {
            polygon.setAttribute('fill', coloringColor);
        });
    });
});

svgThumbTwo.addEventListener('click', () => {
    clearColoringContainer();
    const template = document.createElement('template');
    template.innerHTML = coloringImages[1];
    const coloringDom = template.content;
    coloringContainer.appendChild(coloringDom);
});


function clearColoringContainer() {
    while(coloringContainer.children.length > 0) {
        coloringContainer.lastElementChild.remove();
    }
}