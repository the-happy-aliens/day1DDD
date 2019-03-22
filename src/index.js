import loadHeader from './header-component.js';
import { auth, usersFavoriteColorSchemesRef } from './firebase.js';

loadHeader();

const prismBox = document.querySelector('.prism-box');
const prismList = document.getElementById('prism-list');
const prismPrompt = document.getElementById('click-fade-in');

prismBox.addEventListener('mouseover', () => {
    prismPrompt.classList.remove('hidden');
    prismPrompt.classList.remove('click-fade-out');
    prismPrompt.classList.add('click-fade-in');
});

prismBox.addEventListener('mouseleave', () => {
    prismPrompt.classList.remove('click-fade-in');
    prismPrompt.classList.add('click-fade-out');
});


prismBox.addEventListener('click', () => {
    prismList.classList.remove('hidden');
    prismList.classList.add('fade-in');
});

const coloringLink = document.getElementById('coloring-link');
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