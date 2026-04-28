var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function (){
    text.innerHTML = input.value;
}

var num1 = document.getElementById('input_id1');
var num2 = document.getElementById('input_id2');
var btn = document.getElementById('btn2_id');
var result = document.getElementById('result_id');

btn.onclick = function() {
    result.innerHTML = num1.value + num2.value;
    if(result > 10){
        text2.innerHTML = "greater then 10"
    }
    else if(result2 < 10){
        text2.inner.HTML ="less than 10"
    }
    else {
        
    }
}
