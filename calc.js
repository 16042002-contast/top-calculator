//when user click any number
//they should see the equation being written in input box
const keys = document.querySelectorAll('.row div')
keys.forEach(key=>{
    key.addEventListener('click',displayInput);
});


//ifclicked item is number operate number
//if it is operator act accordingly

//taking reference for input box
const input = document.querySelector('.input');
const output = document.querySelector('.output');
input.textContent = '';
let num1Str = '';
let num2Str ='';
let flag,sign;
function displayInput(e) {


    if(e.target.id == '='){
        // console.log(num1Str);
        // console.log(num2Str);
        let result = operate(num1Str,num2Str,sign);
        output.textContent = '=' + result;
        // console.log(output.textContent);
        return;
        
    }

    if(e.target.className == 'num'){
        if(num1Str.length !== 0 && flag == 1){
            num2Str+=e.target.id;
        }
        else{
        num1Str+=e.target.id;
        }
    }

    if(e.target.className == 'operator'){
        sign = e.target.id;
        flag = 1;
    }

    if(e.target.className == 'clear'){
        clearAll();
        return;
    }

    let content = e.target.id;
    input.textContent+=content;
}



function operate(num1,num2,sign) {
   
    if(sign == '+'){
        let result = add(num1,num2);
        
        return result;
    }

    else  if(sign == '-'){
        let result = sub(num1,num2);
        
        return result;
    }
    else  if(sign == 'X'){
        let result = mul(num1,num2);
        
        return result;
    }
    else  if(sign == '/'){
        let result = divi(num1,num2);
        
        return result;
    }
}


function add(num1,num2) {
    let a = parseInt(num1);
    let b = parseInt(num2);
    return a+b;
    
}

function sub(num1,num2) {
    let a = parseInt(num1);
    let b = parseInt(num2);
    return a-b;
}

function sub(num1,num2) {
    let a = parseInt(num1);
    let b = parseInt(num2);
    return a-b;
}


function mul(num1,num2) {
    let a = parseInt(num1);
    let b = parseInt(num2);
    return a*b;
}

function divi(num1,num2) {
    let a = parseInt(num1);
    let b = parseInt(num2);
    return a/b;
}

function clearAll() {
    input.textContent = '';
    output.textContent = '0';
}
















