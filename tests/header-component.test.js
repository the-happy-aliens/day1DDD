import { makeHeader } from '../src/header-component.js';

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

