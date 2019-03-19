import { usersRef, auth } from './firebase.js';

const quizForm = document.getElementById('color-quiz');
const numberChoice = document.getElementById('number-choice');
const numberDisplay = document.getElementById('number-chosen');

numberChoice.addEventListener('change', event => {
    event.preventDefault();
    numberDisplay.textContent = numberChoice.value;
});

quizForm.addEventListener('submit', event => {
    event.preventDefault();
    const quizFormData = new FormData(quizForm);
    const answers = {
        animal: quizFormData.get('animal'),
        vacation: quizFormData.get('vacation'),
        faveColor: quizFormData.get('fave-color'),
        movie: quizFormData.get('movie'),
        autobiography: quizFormData.get('autobiography'),
        dingDong: quizFormData.get('ding-dong'),
        numberChoice: quizFormData.get('number-choice'),
        cuisine: quizFormData.get('cuisine'),
        dogName: quizFormData.get('dog-name'),
    };
    const quizResult = evaluateQuiz(answers);
    
    auth.onAuthStateChanged(user => {
        const userId = usersRef.child(user.uid);
        userId.update({
            takenQuiz: true
        });
    });
});
