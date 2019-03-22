import { auth, usersFavoriteColorSchemesRef, usersFavoriteColoredPicturesRef } from './firebase.js';
import loadHeader from './header-component.js';
import loadFavoriteSchemes, { convertObjectToArray, loadSavedPictures } from './favorite-component.js';

loadHeader();

const noFavesPrompt = document.getElementById('no-favs');

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = usersFavoriteColorSchemesRef.child(userId);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if(!data) {
                noFavesPrompt.hidden = false;
            } else {
                noFavesPrompt.hidden = true;
                const favoriteSchemesIds = Object.keys(data);
                const favoriteSchemes = convertObjectToArray(data);
                loadFavoriteSchemes(favoriteSchemes, favoriteSchemesIds);
            }
        });
    const userColoredPicturesRef = usersFavoriteColoredPicturesRef.child(userId);
    userColoredPicturesRef.once('value')
        .then(snapshot => {
            const pictureData = snapshot.val();
            const savedPictures = convertObjectToArray(pictureData);
            loadSavedPictures(savedPictures);
        });
});
