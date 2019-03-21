import { auth, usersFavoriteColorSchemesRef } from './firebase.js';
import loadHeader from './header-component.js';
import loadFavoriteSchemes, { convertObjectToArray } from './favorite-component.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = usersFavoriteColorSchemesRef.child(userId);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const favoriteSchemesIds = Object.keys(data);
            const favoriteSchemes = convertObjectToArray(data);
            console.log(favoriteSchemesIds);
            loadFavoriteSchemes(favoriteSchemes, favoriteSchemesIds);
        });
});
