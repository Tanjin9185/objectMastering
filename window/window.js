const name = 'tanjin';          //global variable/scope, jkono dik teke access kra jabe
function add(num1, num2){
    console.log(name);
    let result = num1 + num2;   //result local/fun-block scope tai vaire teke result access kra jabe na..impicitli global holo fun er vitore variable (const/let/var) na bolle hoi..tkhn varibale global hye jai..fun er vitore onicha-krito variable(without const/let) hole ta impicitli global
    
    function double(num){       //onno ekta fun er vitore howai block scope
        return num * 2;
    }
    let total = double(result);
    return total;
}
var sum = add(13,21);
console.log(sum);
console.log(name);
// window hoece js/api koi excute hbe/khetro/running environment
// window hoece global scope..j kew j kono dik teke access krte parbe