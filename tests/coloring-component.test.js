import { createColorDiv, createSchemeLi } from '../src/coloring-component.js';

const test = QUnit.test;

QUnit.module('coloring components');

test('create div for colors', assert => {
    //arrange
    const expected = /*html*/ `
        <div class="palette-color" style="background-color: #6BF9B9;"></div>
    `;
    const color = '6BF9B9';
    //act
    const result = createColorDiv(color);
    //assert
    assert.htmlEqual(result, expected);
});

test('create li for scheme', assert => {
    //arrange
    const expected = /*html*/ `
        <li>74fdbfanalogic5</li>
    `;
    const scheme = '74fdbfanalogic5';
    //act
    const result = createSchemeLi(scheme);
    //assert
    assert.htmlEqual(result, expected);
});