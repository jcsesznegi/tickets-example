# React/Redux and Immutable JS Example Notes

## Installation

1. Install React
https://facebook.github.io/react/

```
npm install -g create-react-app
create-react-app my-app
```

React dependencies:

```
npm install --save react-dom
npm install --save react-router-dom
```

2. Install Redux
http://redux.js.org/

```
npm install --save redux
npm install --save react-redux
```

Redux dependencies:

```
npm install --save-dev redux-devtools
```

3. Install Immutable.js
https://facebook.github.io/immutable-js/

```
npm install --save immutable
npm install --save redux-immutable
```

## How to Run

```
npm build
npm start
```



## TODOs

* Add more functionality, such as:
  * Ability to complete or delete ticket from list view
  * Different types of form fields such as radio, checkboxes
  * Add sorting to list view
  * Form validation
* Change to use `react-router-redux` instead of `react-router-dom`
* Apply middleware
  * Logging
  * API
  * Error Handling
