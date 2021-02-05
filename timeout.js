//onno kaj ses hye jawar por e kaj ta krbe

function doSomething(){
    console.log(3);
}

console.log(2);
setTimeout(doSomething, 4000); //onno kaj ses hye gele e time er por eta execute krbe/onno kaj ses hote e time teke besi lagle oita ses por eta execute hbe
console.log(4);
console.log(4);
setTimeout(function(){
    console.log('Lazy and waiting');
}, 4000)
console.log(4);
setTimeout(() => {
    console.log('see you later');
}, 4000)
console.log(4);

setInterval(() => {             //nisdistro time por eta hote e takbe
   console.log('do it again and again');
}, 2000);