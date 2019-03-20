import { auth, usersFavoriteColorSchemesRef } from './firebase.js';

export function createSchemeLi() {
    const html = /*html*/ `
        <li class="scheme-display">
            <div><span class="favorite-heart">♡</span></div>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function createColorSection(color) {
    const html = /*html*/ `
        <section class="color-display">
            <p>#${color}</p>
            <div style="background-color: #${color};"></div>
        </section>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


export function convertObjectToArray(data) {
    const keys = Object.keys(data);
    return keys.map(key => data[key]);
}

const favoritesContainer = document.getElementById('favorites-container');

export default function loadFavoriteSchemes(schemes, favoriteSchemeIds) {
    schemes.forEach((scheme, index) => {
        const favoriteDom = createSchemeLi(scheme);
        const favoriteHeart = favoriteDom.querySelector('.favorite-heart');
        const userId = auth.currentUser.uid;
        const usersFavoritesRef = usersFavoriteColorSchemesRef.child(userId);
        const favoriteId = favoriteSchemeIds[index]
        const userFavoriteSchemeRef = usersFavoritesRef.child(favoriteId);
        userFavoriteSchemeRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                } else {
                    removeFavorite();
                }
                function addFavorite() {
                    isFavorite = true;
                    favoriteHeart.textContent = '♥';
                    favoriteHeart.classList.add('favorite');
                }
                function removeFavorite() {
                    isFavorite = false;
                    favoriteHeart.textContent = '♡';
                    favoriteHeart.classList.remove('favorite');
                }
                favoriteHeart.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteSchemeRef.remove();
                        removeFavorite();
                    } else {
                        userFavoriteSchemeRef.set({
                            seedColor: scheme.seedColor,
                            scheme: scheme.scheme
                        });
                        addFavorite();
                    }
                });
            });
        favoritesContainer.appendChild(favoriteDom);
    });
}
