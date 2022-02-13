const inputCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result');


function input(i){
    inputCalc.value = inputCalc.value + i
}
function result() {
    if( eval(inputCalc.value) == undefined) {
        resultCalc.value = '';
        inputCalc.value = '0';
    }if ( eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0';
        inputCalc.value = 'Dividing by zero is bnot allowed';
    }
    resultCalc.value = eval(inputCalc.value)
    inputCalc.value = eval(inputCalc.value)
}

function backpsace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1);
}

function reset(){
    resultCalc.value = '';
    inputCalc.value = '';
}

function percent() {

}