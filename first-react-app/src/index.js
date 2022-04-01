import React from 'react';
import ReactDOM from 'react-dom';

function Greetings() {
  return (
    <div><Greet/> <Name/></div>
  );
}
function Greet(){
  var greet = "Hi";
  return <span>{greet}</span>;
}
function Name(){
  var name = "Desmond";
  return <span>{name}</span>
}
ReactDOM.render(
  <Greetings/>, document.querySelector('#root')
);