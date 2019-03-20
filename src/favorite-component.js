import { auth, usersFavoriteColorSchemesRef  } from './firebase.js';

export function createSchemeLi(favorite) {
    const html = /*html*/ `
        <li class="scheme-display">
            <div><span class="favorite-heart">♡</span></div>
            <section class="color-display">
                <p>#${favorite.scheme[0]}</p>
                <div style="background-color: #${favorite.scheme[0]};"></div>
            </section>
            <section class="color-display">
                <p>#${favorite.scheme[1]}</p>
                <div style="background-color: #${favorite.scheme[1]};"></div>
            </section>
            <section class="color-display">
                <p>#${favorite.scheme[2]}</p>
                <div style="background-color: #${favorite.scheme[2]};"></div>
            </section>
            <section class="color-display">
                <p>#${favorite.scheme[3]}</p>
                <div style="background-color: #${favorite.scheme[3]};"></div>
            </section>
            <section class="color-display">
                <p>#${favorite.scheme[4]}</p>
                <div style="background-color: #${favorite.scheme[4]};"></div>
            </section>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


