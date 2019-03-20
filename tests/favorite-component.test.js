import { createSchemeLi } from '../src/favorite-component.js';
const test = QUnit.test;
QUnit.module('favorites page test');

test('create dom for faves', assert => {
    // arrange
    const expected = /*html*/ `
        <li class="scheme-display">
            <div><span class="favorite-heart">♡</span></div>
            <section class="color-display">
                <p>#74fdbf</p>
                <div style="background-color: #74fdbf;"></div>
            </section>
            <section class="color-display">
                <p>#6BF9B9</p>
                <div style="background-color: #6BF9B9;"></div>
            </section>
            <section class="color-display">
                <p>#6FFAE5</p>
                <div style="background-color: #6FFAE5;"></div>
            </section>
            <section class="color-display">
                <p>#73E7FB</p>
                <div style="background-color: #73E7FB;"></div>
            </section>
            <section class="color-display">
                <p>#78C1FC</p>
                <div style="background-color: #78C1FC;"></div>
            </section>
        </li>
    `;
    const favorite = {
        scheme: {
            0: '74fdbf',
            1: '6BF9B9',
            2: '6FFAE5',
            3: '73E7FB',
            4: '78C1FC',
        }
    };
    // act
    const result = createSchemeLi(favorite);


    // assert
    assert.htmlEqual(result, expected);
    
});
