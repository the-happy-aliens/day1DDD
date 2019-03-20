const test = QUnit.test;

QUnit.module('object to array tests');

function convertObjectToArray(data) {
    const keys = Object.keys(data);
    return keys.map(key => data[key]);
}

test('object will be converted to array of objects', assert => {
    //arrange
    const data = {
        abc: {
            id: 1,
            name: 2
        },
        def: {
            id: 3,
            name: 4
        }
    };
    
    const expected = [
        { id: 1, name: 2 },
        { id: 3, name: 4 }
    ];
    //act
    const result = convertObjectToArray(data);
    //assert
    assert.deepEqual(result, expected);
});