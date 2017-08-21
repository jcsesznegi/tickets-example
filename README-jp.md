# React・ReduxとImmutableJSについて 

## 最初のインストール

1. Reactのインストール
https://facebook.github.io/react/

```
npm install -g create-react-app
create-react-app my-app
```

Reactのその他のインストール:

```
npm install --save react-dom
npm install --save react-router-dom
```

2. Reduxのインストール
http://redux.js.org/

```
npm install --save redux
npm install --save react-redux
```

Reduxのその他のインストール:

```
npm install --save-dev redux-devtools
```

3. Immutable.jsのインストール
https://facebook.github.io/immutable-js/

```
npm install --save immutable
npm install --save redux-immutable
```

## 動作する方法

```
npm install
npm start
```

## なぜ、Immutable.JSをご利用ですか？

* 値が変わらないこと（イミュータブル）
* 徹底的なAPIを揃えている
  * `List`、 `Map`、 `Record`、など
* パフォーマンスが良い

## Immutable.JSを使うの弱点

* 習う、利用するのは難しいDifficult to interoperate with
  * dataには普通のJSメソッドを使わなくなってしまう
  * シンタックスが違う
  * ES6の`destructuring`、`spread operators`を使わなくなる
* Immutable.JSを使うと、コードのどこでも使わないといけなくなります。
* シンプルな値、または良く変わる値には適当ではありません。例：
  * Strings
  * Numbers
  * Bools
* デバグするのは難しい
* Breaks object references, causing poor performance
* `combineReducers`は普通のオブジェクトを期待しているので、ステート全体をImmutable.jsにする(Map()にする)と`combineReducers`を使えなってしまう。 `redux-immutable`を使わなければなりません:
https://www.npmjs.com/package/redux-immutable#usage
* もしstoreはImmutable.JSのオブジェクトにすると、`react-router-redux`を使えなく、 カスタムのreducerをつかなければなりません：
https://www.npmjs.com/package/redux-immutable#using-with-react-router-redux

## ベストプラクティス（Reduxサイトにより）
http://redux.js.org/docs/recipes/UsingImmutableJS.html

* Immutable.JSのオブジェクトと普通のJSオブジェクトを混ぜない方が良い（例：Immutable.JSのMapに、普通のJS
オブジェクトを挿入するとか）
* Reduxのステートツリー全体をImmutable.JSオブジェクトにする（Map()）
* dumbコンポーネント以外のところ、Immutable.JSを使う
* スローなので`toJS()`のメソッドをあまり使わないこと
* ReduxのselectorはImmutable.JSのオブジェクトを戻すこと
* smartコンポーネント（container）にImmutable.JSのオブジェクトを使う
* mapStateToPropsに`toJS()`を使わないこと（毎回、レンダリングをしてしまうので）
* dumbコンポーネントにImmutable.JSを使わないこと
* Higher Order Component（HOC）を使って、smartコンポーネント（container）のImmutable.JSのpropsをdumbコンポーネントの普通のJSのpropsにする

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
一番いいパーフォマンスにするため、`toJS()`を使うことができません（スローなので）。その場合、Immutable.JSのオブジェクトを直接にdumbコンポーネントに使います。しかし、Higher Order Components（HOC）を使えば、パフォーマンスはそんなに変わらないので、上記のようにするのは推薦されているようです。

* デバグする時、Immutable Object FormatterのChrome拡張機能を利用すること


## 役に立つの情報


ReduxにImmutable.JSを利用について
http://redux.js.org/docs/recipes/UsingImmutableJS.html

redux-immutable
https://www.npmjs.com/package/redux-immutable

Immutable Object FormatterのChrome拡張機能
https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog

React・Reduxのパーフォマンスについての色々
https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#immutable-data


## TODO

* 新しい機能を追加すること
  * リストビューからチケットを完了・削除する
  * チケット詳細その他のデータタイプ：
    * radio 
    * checkbox
  * リストビューのソート機能
  * フォームバリデーション(検証)
* ルーティングに関して、`react-router-redux` または `react-router-dom`からカスタムなreducerにすること
* ミドルウェアを追加する
  * ログの作成
  * エラーハンドラー

