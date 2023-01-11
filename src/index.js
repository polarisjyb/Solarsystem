console.log('hello')

import "../public/img/d.png"

const body = document.body
console.log(body)

const root = document.getElementById('root');
console.log(root);

const hello = document.createElement('h1');
console.log(hello);

root.append(hello);

hello.innerHTML = 'hello, jumper'

document.body.style.backgroundRepeat = 'no-repeat'
document.body.style.backgroundImage = "url('../public/img/d.png')"

console.log(hello.style);
