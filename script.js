let Numbers = "";
let result;

function operator(op) {
    if(Numbers !== "" && !Numbers.endsWith('* ') && !Numbers.endsWith('- ') && !Numbers.endsWith('+ ') && !Numbers.endsWith('/ ')){
    Numbers = Numbers + " " + op + " ";
    document.querySelector(".display").innerHTML = `<h1>${Numbers}</h1>`;
    }
};

function number(Num) {
    Numbers = Numbers + Num;
    console.log(Numbers);
    document.querySelector(".display").innerHTML = `<h1>${Numbers}</h1>`;
};

function clearDisplay() {
    Numbers = "";
    document.querySelector('.display').innerHTML = "<h1>0</h1>"
};

function equal() {
    function newEval (a){
        return new Function("return " + a)();
    }
    result = newEval(Numbers);
    document.querySelector('.display').innerHTML = `<h1>${result}</h1>`;
    Numbers = "";
};