const test = QUnit.test;
QUnit.module('art thumbnail tests');

function createThumbnailDiv(path) {
    const html = /*html*/ `
        <div class="thumbnail"><img src="${path}"></div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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