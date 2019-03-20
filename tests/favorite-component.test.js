import { createSchemeLi, createColorSection } from '../src/favorite-component.js';

const test = QUnit.test;
QUnit.module('favorites page test');

test('create dom for faves', assert => {
    // arrange
    const expected = /*html*/ `
        <li class="scheme-display">
            <div><span class="favorite-heart">♡</span></div>
        </li>
    `;
    // act
    const result = createSchemeLi();

    // assert
    assert.htmlEqual(result, expected);
});


test('function will create color section for each color in array', assert => {
    //arrange
    const color = '74fdbf';

    const expected = /*html*/ `
        <section class="color-display">
            <p>#74fdbf</p>
            <div style="background-color: #74fdbf;"></div>
        </section>
    `;
    //act
    const result = createColorSection(color);
    //assert

    assert.htmlEqual(result, expected);

});


