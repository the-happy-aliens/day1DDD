const test = QUnit.test;
QUnit.module('quiz test');

function scoreAnimal(animal, scorecard) {
    switch(animal) {
        case 'elephant':
            scorecard.blue++;
            break;
        case 'jellyfish':
            scorecard.turquoise++;
            break;
        case 'snake':
            scorecard.black++;
            break;
        case 'panda':
            scorecard.gray++;
            break;
        case 'quokka':
            scorecard.pink++;
            break;
        case 'fawn':
            scorecard.yellow++;
            break;
        case 'peacock':
            scorecard.purple++;
            break;
        case 'snail':
            scorecard.green++;
            break;
        default:
            break;
    }
}
function scoreVacation(vacation, scorecard) {
    switch(vacation) {
        case 'tropical-island':
            scorecard.black++;
            break;
        case 'metropolis':
            scorecard.red++;
            break;
        case 'prairie':
            scorecard.gray++;
            break;
        case 'sea':
            scorecard.turquoise++;
            break;
        case 'clouds':
            scorecard.yellow++;
            break;
        case 'woods':
            scorecard.green++;
            break;
        case 'alpine':
            scorecard.purple++;
            break;
        case 'village':
            scorecard.blue++;
            break;
        default:
            break;
    }
}
function scoreColor(color, scorecard) {
    switch(color) {
        case 'cerulean':
            scorecard.turquoise++;
            break;
        case 'mauve':
            scorecard.blue++;
            break;
        case 'chartreuse':
            scorecard.orange++;
            break;
        case 'quin-gold':
            scorecard.pink++;
            break;
        case 'magenta':
            scorecard.red++;
            scorecard.black++;
            break;
        case 'pewter':
            scorecard.gray++;
            break;
        case 'periwinkle':
            scorecard.purple++;
            break;
        case 'midnight':
            scorecard.red++;
            scorecard.black++;
            break;
        default:
            break;
    }
}
function scoreMovie(movie, scorecard) {
    switch(movie) {
        case 'commando':
            scorecard.blue++;
            break;
        case 'terminator-2':
            scorecard.pink++;
            break;
        case 'twins':
            scorecard.orange++;
            break;
        case 'kindergarten-cop':
            scorecard.yellow++;
            break;
        case 'predator':
            scorecard.red++;
            break;
        case 'total-recall':
            scorecard.black++;
            break;
        case 'true-lies':
            scorecard.turquoise++;
            break;
        case 'all-movies':
            scorecard.green++;
            break;
        default:
            break;
    }
}
function scoreAutobiography(autobiography, scorecard) {
    switch(autobiography) {
        case 'life-color':
            scorecard.turquoise++;
            scorecard.pink++;
            break;
        case 'big-adventure':
            scorecard.orange++;
            scorecard.yellow++;
            break;
        case 'shades-of-grey':
            scorecard.red++;
            scorecard.purple++;
            break;
        case 'beer':
            scorecard.black++;
            scorecard.yellow++;
            break;
        case 'potato':
            scorecard.gray++;
            scorecard.green++;
            break;
        case 'cats':
            scorecard.green++;
            scorecard.blue++;
            break;
        default:
            break;
    }
}
function scoreDingDong(dingDong, scorecard) {
    switch(dingDong) {
        case 'pee-wee':
            scorecard.purple++;
            scorecard.orange++;
            break;
        case 'whos-there':
            scorecard.pink++;
            scorecard.black++;
            break;
        case 'punch':
            scorecard.red++;
            scorecard.yellow++;
            break;
        case 'laugh':
            scorecard.turquoise++;
            scorecard.red++;
            break;
        case 'run-away':
            scorecard.green++;
            scorecard.gray++;
            break;
        case 'you-are':
            scorecard.pink++;
            scorecard.yellow++;
            break;
        default:
            break;
    }
}
function scoreNumber(number, scorecard) {
    switch(number) {
        case 1:
        case 2:
            scorecard.gray++;
            break;
        case 3:
        case 4:
            scorecard.yellow++;
            break;
        case 5:
            scorecard.green++;
            break;
        case 6:
        case 7:
        case 8:
        case 9:
            scorecard.blue++;
            break;
        case 10:
        case 11:
            scorecard.purple++;
            break;
        case 12:
        case 13:
            scorecard.red++;
            break;
        default:
            break;
    }
}
function scoreCuisine(cuisine, scorecard) {
    switch(cuisine) {
        case 'thai':
            scorecard.red++;
            break;
        case 'mexican':
            scorecard.orange++;
            break;
        case 'italian':
            scorecard.yellow++;
            break;
        case 'greek':
            scorecard.green++;
            break;
        case 'ethiopian':
            scorecard.turquoise++;
            break;
        case 'american':
            scorecard.gray++;
            break;
        case 'german':
            scorecard.black++;
            break;
        case 'japanese':
            scorecard.blue++;
            break;
        case 'korean':
            scorecard.pink++;
            break;
        default:
            break;
    }
}
function scoreDogName(dogName, scorecard) {
    switch(dogName) {
        case 'doge':
            scorecard.turquoise++;
            break;
        case 'frank':
            scorecard.orange++;
            break;
        case 'bear':
            scorecard.blue++;
            break;
        case 'spot':
            scorecard.yellow++;
            break;
        case 'katie-rose':
            scorecard.purple++;
            break;
        case 'stevie':
            scorecard.black++;
            break;
        case 'brian':
            scorecard.red++;
            break;
        case 'lucky':
            scorecard.green++;
            break;
        default:
            break;
    }
}
function evaluateQuiz(answers) {
    const scorecard = { blue: 0, red: 0, black: 0, green: 0, yellow: 0, orange: 0, pink: 0, purple: 0, gray: 0, turquoise: 0 };
    scoreAnimal(answers.animal, scorecard);
    scoreVacation(answers.vacation, scorecard);
    scoreColor(answers.color, scorecard);
    scoreMovie(answers.movie, scorecard);
    scoreAutobiography(answers.autobiography, scorecard);
    scoreDingDong(answers.dingDong, scorecard);
    scoreNumber(answers.number, scorecard);
    scoreCuisine(answers.cuisine, scorecard);
    scoreDogName(answers.dogName, scorecard);
    return evaluateScorecard(scorecard);
}

function evaluateScorecard(scorecard) {
    const colors = Object.keys(scorecard);
    const scores = colors.map(color => {
        return scorecard[color];
    });
    const highestNumber = Math.max(...scores);
    
    const array = [];
    for(let i = 0; i < colors.length; i++) {
        if(scores[i] === highestNumber) {
            array.push(colors[i]);
        }
    }
    if(array.length > 1) {
        return 'random';
    } else {
        return array[0];
    }
}

test('evaluate scorecard correctly', assert => {
    // arrange
    const scorecard = { blue: 0, red: 1, black: 0, green: 3, yellow: 2, orange: 0, pink: 2, purple: 0, gray: 1, turquoise: 0 };
    const expected = 'green';
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
    const expected = 'green';
    // act
    const result = evaluateQuiz(answers);
    // assert
    assert.equal(result, expected);
});