//variables
let password = '123456'
let input = '123456'
let result = input == password
console.log(result)

//condicionales

if (result == true) {
 console.log('contraseña correcta')
} else {
 console.log('contraseña incorrecta')
}

let score = 85

if (score >= 90) {
 console.log('Excelente')
} else if (score >= 80) {
 console.log('Muy bien')
} else if (score >= 70) {
 console.log('Bien')
} else {
 console.log('Necesita mejorar')
}
if (score < 15) {
 console.log('Muy mal')
}

let typecard = 'debid card'
switch (typecard) {
 case 'credit card':
  console.log('Tarjeta de crédito')
  break
 case 'debid card':
  console.log('Tarjeta de débito')
  break
 default:
  console.log('Tipo de tarjeta desconocida')
  break
}

//bucles
let count = 0
while (count < 3) {
 console.log(count)
 count++
}
//iteradores
let names = ['Alice', 'Bob', 'Charlie']

console.log(names[0]) // Alice
console.log(names[1]) // Bob
console.log(names[2]) // Charlie
console.log(names.length) // 3
for (let i = 0; i < names.length; i++) {
 console.log(names[i])
}

//funciones
function greeting(name) {
 console.log('Hello, ' + name + '!')
}
greeting('Alice')
greeting('Bob')
greeting('Charlie')

function add(a, b) {
 console.log(a + b)
}
add(5, 3) // 8
add(10, 20) // 30
add(-5000000, 15000000000) // 14995000000
