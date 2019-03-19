import { usersRef, auth } from './firebase.js';

const quizForm = document.getElementById('color-quiz');
quizForm.addEventListener('submit', event => {
    event.preventDefault();
    auth.onAuthStateChanged(user => {
        const userId = usersRef.child(user.uid);
        // console.log(userId.child(takenQuiz));
        userId.update({
            takenQuiz: true
        });
    });
});
