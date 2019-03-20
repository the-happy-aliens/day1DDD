const test = QUnit.test;
QUnit.module('favorites page test');

function createSchemeLi() {
    return /*html*/ `
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
}

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
    
    // act
    const result = createSchemeLi();


    // assert
    assert.equal(result, expected);
    
});
