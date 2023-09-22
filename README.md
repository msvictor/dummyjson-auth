<h1 align="center">
    Dummyjson Auth
</h1>

<p align="center">
   <a href="https://github.com/msvictor">
    <img alt="Code by Victor Gabriel" src="https://img.shields.io/badge/code%20by-Victor Gabriel-%23E02041">
  </a>
</p>

<p align="center">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
    <img alt="Javacript" src="https://img.shields.io/badge/Javacript-%23D1CB36">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img alt="Typescript" src="https://img.shields.io/badge/Typescript-%23007acc">
  </a>
  <a href="https://reactnative.dev/">
    <img alt="ReactNative" src="https://img.shields.io/badge/React Native-%235465D1">
  </a>
  <a href="https://jestjs.io/pt-BR/">
    <img alt="Jest" src="https://img.shields.io/badge/Jest-%2315C213">
  </a>
  <a href="https://styled-components.com/">
    <img alt="Styled-Components" src="https://img.shields.io/badge/Styled Components-%23C871AD">
  </a>
  <a href="https://eslint.org/">
    <img alt="eslint" src="https://img.shields.io/badge/ESLint-%234B32C3">
  </a>
    <a href="https://prettier.io/">
    <img alt="prettier" src="https://img.shields.io/badge/Prettier-%231A2B34">
  </a>
    <a href="https://redux.js.org/">
    <img alt="husky" src="https://img.shields.io/badge/Redux-%23181820">
  </a>
</p>

## Dummyjson Auth

- [Dummyjson Auth](#dummyjson-auth)
- [:interrobang: About](#interrobang-about)
- [:octocat:Getting Started](#octocatgetting-started)
  - [Prerequisites](#prerequisites)
    - [For Android](#for-android)
    - [For iOS](#for-ios)
  - [Running the application](#running-the-application)
- [:scroll: Project Scripts](#scroll-project-scripts)
- [:diamonds: Techs](#diamonds-techs)
- [:sparkles: The Application](#sparkles-the-application)
- [:memo: License](#memo-license)

## :interrobang: About

<strong>Dummyjson Auth:</strong> a cutting-edge mobile application developed with React Native designed to streamline the user login process and provide a seamless and personalized experience for users. This innovative app prioritizes user convenience and data security, making it the go-to choice for accessing and managing personal information effortlessly.

## :octocat:Getting Started

These instructions will allow you to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First of all you will need to have installed on your machine some tools to proceed.

- Node.js **v16.0 or above**, to install node check out: [node docs](https://nodejs.org/pt-br/docs)
- Watchman, to install watchman check out: [watchman docs](https://facebook.github.io/watchman/docs/install)
- Yarn, to install yarn check out: [yarn docs](https://yarnpkg.com/getting-started/install)

#### For Android

- You will must have a ANDROID_HOME environment variable setted, so check out [developer android docs](https://developer.android.com/studio/command-line/variables?hl=pt-br)

#### For iOS

- You will must have a CocoaPods **v1.11 or above** installed, so check out [cocoapods](https://cocoapods.org/)
- You will must have a Ruby **v2.7.5** installed, so check out [rvm](https://rvm.io/)
- You will must have a Xcode and xcode comand line tools installed, so check out [apple developer](https://developer.apple.com/xcode/resources/)

### Running the application

1. On command line terminal clone this repo:

```sh
  git clone https://github.com/msvictor/dummyjson-auth.git
```

2. Go to folder:

```sh
  cd dummyjson-auth
```

3. Add the dependencies

- with yarn

```sh
  yarn
```

- or with npm

```sh
  npm install
```

4. Run the app

- with yarn

```sh
  # on android device
  yarn android
```

```sh
  # on ios device
  yarn ios
```

- or with npm

```sh
  # on android device
  npm run android
```

```sh
  # on ios device
  npm run ios
```

## :scroll: Project Scripts

- `yarn android` execute app on android device
- `yarn commit` execute commit strategy
- `yarn clean:watchman` clean watchman environment
- `yarn clean:android` clean android environment
- `yarn generate:component` generate a new component
- `yarn generate:page` generate a new page
- `yarn generate:store` generate a new store
- `yarn ios` execute app on ios device
- `yarn lint:check` execute the linter and check for problems.
- `yarn lint:fix` execute the linter and automatically fix issues identified
- `yarn prettify:check` check file formatting with prettier.
- `yarn prettify:write` format files with prettier.
- `yarn postinstall` execute task to prevent issues on installed packages
- `yarn start` starts react native metro bundler
- `yarn setup:ios` prepare ios environment to execute the app
- `yarn setup:android` prepare android environment to execute the app
- `yarn test` used to run tests if have any

## :diamonds: Techs

The project was developed with the technologies below:

- [Javacript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/)
- [React Native](https://expo.io/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [Axios](https://axios-http.com/docs/intro)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Config](https://github.com/luggit/react-native-config)
- [React Redux](https://redux.js.org/introduction/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Styled Components](https://styled-components.com/)

## :sparkles: The Application

<h3 align="center">
    <img alt="splash" src=".github/assets/screenshot_login.png" width="25%">
    <img alt="dash" src=".github/assets/screenshot_profile.png" width="25%">
</h3>

## :memo: License

This project is under MIT LICENSE. for more details follow the link: [LICENSE](LICENSE).
