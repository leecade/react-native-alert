var React = require('react-native')

var {
  AlertIOS,
} = React

/*
AlertIOS.alert(
  'Foo Title',
  'My Alert Msg',
  [
    {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
    {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
  ]
)}
 */
module.exports = function () {
  var title = ''
  var message = ''
  var buttons = []
  var args = arguments
  var len = args.length

  if(len == 1) {
    message = args[0] + ''
  }

  if(len == 2) {
    if(args[1] + '' === args[1]) title = args[1]
    if(Array.isArray(args[1])) buttons = args[1]
  }

  if(len > 2) {
    title = args[0] + ''
    message = args[1] + ''
    buttons = args[2]
  }

  if(buttons.length) buttons = buttons.map(function (li) {
    if(li + '' === li) return {
      text: li
    }
  })

  return AlertIOS.alert(title, message, buttons)
}