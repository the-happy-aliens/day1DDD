import { auth, usersFavoriteColorSchemesRef  } from './firebase.js';
import loadHeader from './header-component.js';

loadHeader();


auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = usersFavoriteColorSchemesRef.child(userId);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            console.log(data);
        });
});

