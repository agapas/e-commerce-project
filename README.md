# e-commerce-project

The app is still in **WIP** !!

A multi page E-Commerce website built with React, Redux (with [Reselect](https://www.npmjs.com/package/reselect) package for memoization), ContextAPI and [Firebase](https://firebase.google.com/) (for authentication and database).

The app contains fully responsive pages:

- home page,
- the register & login page with an option of google sign in (user authentication with the Firebase, and user data stored in the Firestore),
- shop page,
- checkout page.

Plans to add:

- payment using the Stripe API,
- contact page content,
- typescript,
- unit tests.

Plans to improve:

- update libraries,
- change into the NextJS app (or create separated app with the NextJS),
- replace github pages with a host provider like Vercel (up to 3 free projects only), Netlify or Firebase.

### Firebase project setup:

- create your own project in the [Firebase](https://firebase.google.com/)
- in project's Authentication (in "Sign-in method" tab) add "Sign-in providers" that you want (in this project 2 providers are added: Email/Password and Google, but if you want use other providers you will need adjust the code as well)
- use your own configuration of the Firebase web app (overwrite firebaseConfig variable in the `src/utils/firebase.js` with your data copied from web app in Firebase project settings)

You should also add rules in the Firestore to restrict access to your database, for example:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, get, create;
      allow write: if request.auth != null && request.auth.uid == userId
    }
    match /categories/{category} {
      allow read;
      allow write: if request.auth != null && request.auth.uid == 'uid of database owner'
    }
    match /{document=**} {
      allow read;
    }
  }
}
```

### Additional info

The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Currently it has updated some libraries to be able to run it locally, but I have plans to replacing this project with the NextJS app in the nearest future.

## Running the project

- go to project directory,
- run `npm i` or `yarn` to install packages (just a first time),
- run `npm start` or `yarn start` (it runs the app in the development mode and opens [http://localhost:3000](http://localhost:3000) automatically to view in the browser).

## Production build

To run a production build use command `npm run build` or `yarn build`. It builds the app for production to the build folder.

## License

This project is licensed under the [MIT] License - see the [LICENSE.md](LICENSE) file for details.
