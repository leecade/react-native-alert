# react-native-alert

[![npm version](https://badge.fury.io/js/react-native-alert.svg)](http://badge.fury.io/js/react-native-alert)

Use [AlertIOS](http://facebook.github.io/react-native/docs/alertios.html#content) as a simple way just like native javascript.

## INSTALL

```bash
$ npm i react-native-alert --save
```

## USAGE

```javascript
var alert = require('react-native-alert')

// Simple way
alert('123')
alert(123) // Number is allowed

// With title
alert('123', 'title')

// With buttons
alert('123', ['button'])
alert('123', ['button', {text: 'alertButton', onPress: () => alert('ok')}])

// Complete usage
alert('title', '123', [
  {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
  {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
])

// Or just tell the button text
alert('title', '123', ['btn1', 'btn2', {text: 'Bar', onPress: () => console.log('Bar Pressed!')}])
```
