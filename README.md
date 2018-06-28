## Blank 
Boilerplate project with integrations already done.
`React` `Redux` `Typescript` `Firebase` `Sass`

Other packages and tools used: `Material UI` `Redux Form` `Grid styled`

Because of `yarn.lock`  this should run on different versions of node and typescript but for refference, currently I use: `node v8.11.1` `typescript 2.5.2` `yarn 1.6.0`

The authentication flow is already done based on firebase, this includes routes, pages for login, register and reset password as well as the redux logic.

### Running the project
1. Clone this repository using `git clone` and the http link of the repo.
2. `cd blank` to go into the cloned folder
3. `yarn` to install packages - Do not use `npm install`
4. `yarn start` to start the project

### Further info

##### 1. Material ui  `0.18.5`
[Documentation](https://v0.material-ui.com/v0.18.5/#/)
We are using 0.18.5 of material ui. Types are saved in `.packages` folder

##### 2. Styles
Styles are handled by `sass` and compiled to css in the folder `src/assets/styles/`

##### 3. Icons 
Material icons can be used like this:
```
  // import icon
  import Delete from 'material-ui/svg-icons/action/delete';
  
  // render icon
  <Delete />
```
The complete list of material icons can be found [here](https://material.io/tools/icons/?style=baseline).


### Project Structure
The `src` directory is structured like this:

```
  assets/
    logo
    styles
  pages/
    dashboard
    home
    login
    register
    resetPassword
  redux
  App.tsx
  Authentication.tsx
  config.ts
  firebase.ts
  index.ts
```

##### 1. Redux structure of a reducer
```
auth/
  actions.ts
  creators.ts
  initialState.ts
  interface.ts
  reducer.ts
  types.ts
```

All of this files will be used for every section of the redux store, to keep everything well organised and standardised

##### 2. Component structure
```
home/
  _home.ts
  Home.tsx
  home.scss
  index.ts
```

Containers are used to connect the component to redux and are marked with `_` as a standard. In this example `_home.ts` is the container of the Home component.
`Home.tsx` is the component itself.
`home.scss` is an optional file with styles for the component.

##### 3. Auth logic

```
App Component
  // Public routes
  | Login
  | Register
  | Reset Password

  Authentication Component
    // will redirect to Dashboard in case the user is authed
    // will redirect to Login  in case the user is not authed

    Dashboard
    // renders private routes
      | Home Component
```

##### 4. Firebase variables
All the firebase refferences are stored in `firebase.ts` so whenever we interact with any firebase service, import the reference from there.

##### 5. Config

`config.ts` will hold global configurations like Firebase config, Google analytics, adwords, mixpanel, etc.
At the moment this file contains the firebase config only.



