const test = QUnit.test;

QUnit.module('coloring components');

function createColorDiv(color) {
    const html = /*html*/ `
        <div class="palette-color" style="background-color: #${color};"></div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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