# Coalition Frontend Tech task

## Description

Tech task for Colation frontend interview consisted on a login page and a protected route responsible for showing data leaks lists.

## Consideration points

- This app was created with create-react-app.
- It uses react-router-dom for routing purposes.
- Auhtentication state is stored in React Context(no libraries like Redux or Mobx used).
- Used react-query for api calls and cache management.
- UI components from Material-UI.
- Used react-window for bigger lists virtualization.
- Used cypress for integration tests.
- Used react-hook-form for form state management and validation.

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install project dependecies, needed before trying to start.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn cypress`

Make sure to run first `yarn start`.
It runs cypress tests.
