const rootElement = document.getElementById('app')
// const myElement = document.getElementById('h1');

// myElement.className = "blue"
// myElement.innerHTML = "Hello From PluralSight"

//const myReactElement = React.createElement('h1', {className: 'blue'}, 'PluralSight and React');

const Hello = function(){
    return React.createElement("h1", {className: 'blue'}, "React Functional Component")
}


ReactDOM.render(React.createElement(Hello, {}, null), document.getElementById('app'))

//rootElement.appendChild(myElement);