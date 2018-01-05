'use strict';

console.log("App.js is running!");

var app = {
  title: 'Indecision App',
  subtitle: 'Make a decision'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      '1. List 1'
    ),
    React.createElement(
      'li',
      null,
      '2. List 2'
    )
  )
);

var user = {
  name: 'daron',
  age: 29,
  location: 'somewhere'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
