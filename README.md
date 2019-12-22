# Weather Search

Helps to find out current weather in your city.

Uses data from https://openweathermap.org .

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run in development mode?

1. Clone or download and unpack repository, go into its folder. Run `npm install`.
2. Inside file src/App.js in variable API_KEY there is my API key for accessing data from site. Soon it will be deleted. So you need to replace it by yours. To acquire an api key you need to go to https://openweathermap.org/api and sign up. Then replace string in variable API_KEY with your key.
3. Run `npm run start`, go to http://localhost:3000 (service worker won't work, it works only in prod build).

## How to make production build and run it?

1. Clone or download and unpack repository, go into its folder. Run `npm install`.
2. Inside file src/App.js in variable API_KEY there is my API key for accessing data from site. Soon it will be deleted. So you need to replace it by yours. To acquire an api key you need to go to https://openweathermap.org/api and sign up. Then replace string in variable API_KEY with your key.
3. Run `npm run build`.
4. Inside `build` folder: remove `service-worker.js`, put here `serviceWorkerCustom.js`, `offline.html`, `404.html` from `src` folder.
5. Run `npm run start-sw`, go to http://localhost:8080 (service worker won't work, it works only in prod build).


Below you can read the default info from create-react-app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
