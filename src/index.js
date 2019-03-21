import loadHeader from './header-component.js';
import { auth, usersFavoriteColorSchemesRef } from './firebase.js';

loadHeader();

const prismBox = document.querySelector('.prism-box');
const prismList = document.getElementById('prism-list');
const coloringLink = document.getElementById('coloring-link');

prismBox.addEventListener('click', () => {
    if(prismList.hidden) {
        prismList.hidden = false;
    }
    else {
        prismList.hidden = true;
    } 
});

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = usersFavoriteColorSchemesRef.child(userId);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if(!data) {
                coloringLink.hidden = true;
            } else {
                coloringLink.hidden = false;
            }
        });
});