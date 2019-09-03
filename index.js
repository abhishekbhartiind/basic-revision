const rootElement = document.getElementById('app')
const myElement = document.getElementById('h1');

myElement.className = "blue"
myElement.innerHTML = "Hello From PluralSight"

rootElement.appendChild(myElement);