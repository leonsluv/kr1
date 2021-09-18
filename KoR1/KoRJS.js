
let name = "Рома";
alert ("Задание 1:"+name);

const BirthYear = 2002;
alert ("Задание2" + String(BirthYear));

function Greeting(name) {
    alert("Привет, " + String(name))
}
alert("Задание 3");
Greeting(name);

function range(start,end){
    let array = []
    for(let i = 0; start<end;i++ ) {
        array[i] = start;
        ++start;
    }
    return array;
}
alert("Задание 4:");
alert(range(15,30));

function rangeOdd(start,end) {
    let arr = []
    for (let i = 0; start < end; i++) {
        if (start % 2 === 0)
            arr[i] = start;
        ++start;
    }
    return arr;

}
alert("Задание 5");
alert(rangeOdd(15,30));

function average(a,b) {
    return (a+b)/2;
}
alert("Задание 7");
alert(average(15,30));



function square(x) {
    return x*x;
}
alert("Задание 8:");
alert(square(10));



function cube(x) {
    return x*x*x;
}
alert("Задание 9:");
alert(cube(10));