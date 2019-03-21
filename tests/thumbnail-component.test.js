import { createThumbnailDiv } from '../src/thumbnail-component.js';

const test = QUnit.test;
QUnit.module('art thumbnail tests');

test('create thumbnail div', assert => {
    // arrange
    const expected = /*html*/ `
        <div class="thumbnail"><img src="./assets/little-dude.svg"></div>
    `;
    const path = './assets/little-dude.svg';
    // act
    const result = createThumbnailDiv(path);

    // assert
    assert.htmlEqual(result, expected);
});