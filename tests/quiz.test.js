import { evaluateScorecard, convertColorToHex } from '../src/quiz-component.js';
import evaluateQuiz from '../src/quiz-component.js';

const test = QUnit.test;
QUnit.module('quiz test');

test('evaluate scorecard correctly', assert => {
    // arrange
    const scorecard = { blue: 0, red: 1, black: 0, green: 3, yellow: 2, orange: 0, pink: 2, purple: 0, gray: 1, turquoise: 0 };
    const expected = 'green';
    // act
    const result = evaluateScorecard(scorecard);
    // assert
    assert.equal(result, expected);
});

test('evaluate scorecard correctly with two highest numbers', assert => {
    // arrange
    const scorecard = { blue: 0, red: 1, black: 3, green: 3, yellow: 2, orange: 0, pink: 2, purple: 0, gray: 1, turquoise: 0 };
    const expected = 'random';
    // act
    const result = evaluateScorecard(scorecard);
    // assert
    assert.equal(result, expected);
});

test('given answers return user\'s color', assert => {
    // arrange
    const answers = {
        animal: 'snail',
        vacation: 'clouds',
        faveColor: 'quin-gold',
        movie: 'all-movies',
        autobiography: 'cats',
        dingDong: 'run-away',
        numberChoice: 7,
        cuisine: 'thai',
        dogName: 'spot',
    };
    const expected = { quizHex: '556B2F', quizColor: 'green' };
    // act
    const result = evaluateQuiz(answers);
    // assert
    assert.deepEqual(result, expected);
});

test('convert color string to hex', assert => {
    // arrange
    const quizResult = 'turquoise';
    const expected = '40E0D0';
    // act
    const result = convertColorToHex(quizResult);
    // assert
    assert.equal(result, expected);
});