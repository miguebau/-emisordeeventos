let obj = {
    nombre: 'carlos',
    edad: 44,
    apellido: 'Ulibarri'
}
console.log(obj.nombre);
console.log(obj['nombre']);


let myKey = 'nombre'
console.log(obj[myKey]);


let obj1 = {
    nombre: 'carlos',
    edad: '44',
    apellido: 'Ulibarri',
    keyprees: function() {
        return 'Se ha presionado una tecla';
    },
    mouseOver: function() {
        return 'El puntero del mouse esta arriba';
    }

}

console.log(obj1.nombre);
console.log(obj1['nombre']);

let myKey2 = 'nombre'
console.log(obj1[myKey2]);

myKey2 = 'keyprees';
console.log(obj1[myKey2]());
myKey2 = 'mouseOver';
console.log(obj1[myKey2]());

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj1);
myArray.push(function() {
    return "hola desde array"
})
console.log(myArray);

console.log(myArray[2][myKey2]());

console.log(myArray[3]());

let funcArray = [];

funcArray.push(() => {
    console.log("funtion 1");
});

funcArray.push(() => {
    console.log("funtion 2");
});


funcArray.push(() => {
    console.log("funtion 3");
});


funcArray.forEach((item) => {
    item();
})

var Emitter = require('./emitter');
var emtr = new Emitter();
emtr.on('greet', () => {
    console.log('Somewhere, soneone said hello.');

});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

emtr.on('jump', () => {
    console.log('someone jumped!');
});
console.log(emtr)
emtr.emit('jump');