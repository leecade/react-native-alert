var React = require('react-native')

var {
  AlertIOS,
} = React

module.exports = function () {
  var title = ''
  var message = ''
  var buttons = []
  var args = arguments
  var len = args.length

  message = args[0] + ''

  if(len == 2) {
    Array.isArray(args[1])
      ? buttons = args[1]
      : title = args[1] + ''
  }

  if(len > 2) {
    title = args[0] + ''
    message = args[1] + ''
    buttons = args[2]
  }

  if(buttons.length) {
    buttons = buttons.map(function (li) {
      return li + '' === li
        ? {
            text: li
          }
        : li
    })
    return AlertIOS.alert(title, message, buttons)
  }
  return AlertIOS.alert(title, message)
}
