import loadHeader from './header-component.js';
import coloringImages from '../assets/svg-list.js';
import { auth, usersFavoriteColorSchemesRef, usersFavoriteColoredPicturesRef } from './firebase.js';
import { loadSchemesList } from './coloring-component.js';
import { convertObjectToArray } from './favorite-component.js';
import { createThumbnailDiv } from './thumbnail-component.js';

const thumbnailContainer = document.getElementById('thumbnail-container');
const coloringContainer = document.getElementById('coloring-container');
const saveButton = document.getElementById('save-button');

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
const paths = [
    '../assets/bird-guy.svg',
    '../assets/exclamation-girl.svg',
    '../assets/flower-dude.svg',
    '../assets/little-dude.svg',
    '../assets/weird-lady.svg',
];
loadThumbnails(paths, coloringImages);

export default function loadThumbnails(paths, coloringImages) {
    paths.forEach((path, index) => {
        const thumbnailDom = createThumbnailDiv(path);
        const thumbnailDiv = thumbnailDom.querySelector('.thumbnail');
        thumbnailDiv.addEventListener('click', () => {
            clearColoringContainer();
            const template = document.createElement('template');
            template.innerHTML = coloringImages[index];
            const coloringDom = template.content;

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
            coloringContainer.appendChild(coloringDom);
        });
        thumbnailContainer.appendChild(thumbnailDom);
    });
}

function clearColoringContainer() {
    while(coloringContainer.children.length > 0) {
        coloringContainer.lastElementChild.remove();
    }
}

saveButton.addEventListener('click', () => {
    const pictureToBeSaved = document.querySelector('svg');
    const userId = auth.currentUser.uid;
    const usersFavoriteRef = usersFavoriteColoredPicturesRef.child(userId);
    const pictureId = pictureToBeSaved.id + Math.floor(Math.random() * 10000);
    const userFavoritePictureRef = usersFavoriteRef.child(pictureId);
    userFavoritePictureRef.once('value')
        .then(() => {
            userFavoritePictureRef.set({
                id: pictureId,
                picture: pictureToBeSaved.outerHTML
            });
        });
    window.alert('Saved!');
});