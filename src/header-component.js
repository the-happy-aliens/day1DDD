// import { auth } from "./firebase.js";

export function makeHeader() {
    const html = /*html*/`
        <header>
            <h1 class="fancy-header">PRISMATIC</h1>
        </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile() {
    const html = /*html*/`
        <div class="profile">
            <img src="" alt="Avatar of">
            <span>--User Name--</span>
            <button>Sign Out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
// function loadHeader() {
//     const dom = makeHeader();
//     const header = dom.querySelector('section');
//     headerContainer.appendChild(dom);

//     auth.onAuthStateChanged(user => {
//         if(user) {
//             const userDom = makeProfile(user);
//             const signOutButton = userDom.querySelector('button');
//         }
//     })
// }