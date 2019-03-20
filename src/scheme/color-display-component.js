import { auth, usersFavoriteColorSchemesRef } from '../firebase.js';

export function createColorDisplay(color) {
    const html = /*html*/`
        <section class="color-display">
            <p>#${color}</p>
            <div style="background-color: #${color};"></div>
        </section>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

function createFavoriteHeart() {
    const html = /*html*/ `
    <div><span class="favorite-heart">♡</span></div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const colorContainer = document.getElementById('color-container');

export default function loadColorDisplay(colors, schemeOptions) {
    clearColorDisplay();
    const favoriteDom = createFavoriteHeart();
    const favoriteHeart = favoriteDom.querySelector('.favorite-heart');
    const userId = auth.currentUser.uid;
    const usersFavoritesRef = usersFavoriteColorSchemesRef.child(userId);
    const favoriteId = schemeOptions.originalColor[0] + schemeOptions.scheme + schemeOptions.count;
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
                        seedColor: colors[0],
                        scheme: colors
                    });
                    addFavorite();
                }
            });
        });
    colorContainer.appendChild(favoriteDom);
    colors.forEach(color => {
        const dom = createColorDisplay(color);
        colorContainer.appendChild(dom);
    });
}

function clearColorDisplay() {
    while(colorContainer.children.length > 0) {
        colorContainer.lastElementChild.remove();
    }
}