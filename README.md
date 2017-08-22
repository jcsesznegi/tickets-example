# React/Redux and Immutable JS Example Notes

## First Installation

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
npm install
npm start
```

## Why use Immutable.JS

* Guaranteed immutability
* Rich API
  * `List`, `Map`, `Record`, etc.
  * Has convenient ways to set deeply nested properties
```
[SOME_ACTION]: (state, action) => 
  state
    .set('loading', false)
    .setIn(['down', 'we', 'go'], action.payload.id)
    .setIn(['this', 'is', 'easy'], action.payload.response),
```
* Performance
* Can easily detect changes in state
```
oldObjectImmutable !== newObjectImmutable
```

* Don't need to do unnecessary copies as below:
```
newState = Object.assign({}, oldState, { newThing: true });
```

## Difficulties of using Immutable.JS

* Difficult to interoperate with
  * Cannot use standard JS methods to interact with data
  * New syntax
  * No Destructuring or Spread Operators
```
myObj.prop1.prop2.prop3

myImmutableMap.getIn([‘prop1’, ‘prop2’, ‘prop3’])
```
* Once used, Immutable.JS will spread throughout your codebase
* Not suitable for small values that change often. Such as:
  * Strings
  * Numbers
  * Bools
* Difficult to Debug, use the `Immutable.js Object Formatter`:
https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog
* Using`toJS()` will cause low performance 
```
// AVOID .toJS() in mapStateToProps
function mapStateToProps(state) {
  return {
    todos: state.get('todos').toJS() // Always a new object
  }
}
```
* Cannot use `combineReducers` if state object is Immutable.js map, must use `redux-immutable`:
https://www.npmjs.com/package/redux-immutable#usage
* `react-router-redux` does not work with Immutable.js, need to use a custom reducer:
https://www.npmjs.com/package/redux-immutable#using-with-react-router-redux

## With all the difficulties, is it worth using Immutable.JS?

Yes!  Problems with mutated state can be very difficult to debug, so it is worth the effort of using Immutable.js in many cases.

## Best Practices

* Never mix plain JavaScript objects with Immutable.JS
* Make your entire Redux state tree an Immutable.JS object
* Use Immutable.JS everywhere except your dumb components
* Limit your use of `toJS()`
* Your selectors should return Immutable.JS objects
* Use Immutable.JS objects in your Smart Components
* Never use toJS() in mapStateToProps (will cause re-render every time)
* Never use Immutable.JS in your Dumb Components
* Use a Higher Order Component to convert your Smart Component’s Immutable.JS props to your Dumb Component’s JavaScript props

```
import React from 'react'
import { Iterable } from 'immutable'

export const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0
  const VALUE = 1

  const propsJS = Object.entries(
    wrappedComponentProps
  ).reduce((newProps, wrappedComponentProp) => {
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
      wrappedComponentProp[VALUE]
    )
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE]
    return newProps
  }, {})

  return <WrappedComponent {...propsJS} />
}
```

```
import { connect } from 'react-redux'

import { toJS } from './to-js'
import DumbComponent from './dumb.component'

const mapStateToProps = state => {
  return {
    // obj is an Immutable object in Smart Component, but it’s converted to a plain
    // JavaScript object by toJS, and so passed to DumbComponent as a pure JavaScript
    // object. Because it’s still an Immutable.JS object here in mapStateToProps, though,
    // there is no issue with errant re-renderings.
    obj: getImmutableObjectFromStateTree(state)
  }
}
export default connect(mapStateToProps)(toJS(DumbComponent))
```
(For highest perfomance, the `toJS()` method cannot be used as it is slow.  So, in this case Immutable.JS objects are used in the dumb components. However, it is not recommended, and using `toJS()` in the higher order component does not degrade performance much.)

* Use the Immutable Object Formatter Chrome Extension to Aid Debugging

## Useful Info

Using Immutable.JS with Redux
http://redux.js.org/docs/recipes/UsingImmutableJS.html

redux-immutable
https://www.npmjs.com/package/redux-immutable

Immutable Object Formatter
https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog

About React, Redux performance issues:
https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#immutable-data


## TODOs

* Add more functionality, such as:
  * Ability to complete or delete ticket from list view
  * Different types of form fields such as radio, checkboxes
  * Add sorting to list view
  * Form validation
* For routing, change to use a custom reducer instead of `react-router-redux` or `react-router-dom`
* Apply middleware
  * Logging
  * API
  * Error Handling

