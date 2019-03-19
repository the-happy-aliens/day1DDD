import { makeHeader, makeProfile } from '../src/header-component.js';

const test = QUnit.test;
QUnit.module('header component tests');

test('create header', assert => {
    const expected = /*html*/`
        <header>
            <h1 class="fancy-header">PRISMATIC</h1>
        </header>
    `;

    const result = makeHeader();
    assert.htmlEqual(result, expected);
});


test('make profile', assert => {
    const expected = /*html*/`
        <div class="profile">
            <img src="" alt="Avatar of">
            <span>--User Name--</span>
            <button>Sign Out</button>
        </div>
    `;
    const result = makeProfile();

    assert.htmlEqual(result, expected);
});