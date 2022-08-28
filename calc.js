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
let flag = 0;
let sign;
const arrBefore = [];

function displayInput(e) {
    arrBefore.push(e);
    // console.log(arrBefore);

    if(e.target.id == '='){
        // console.log(num1Str);
        // console.log(num2Str);
        let result = operate(num1Str,num2Str,sign);
        output.textContent = '=' + result;
        num1Str = result;
        // console.log(num1Str);
        num2Str = '';
        flag = 0;
        // console.log(output.textContent);
        return;
        
    }

    if(e.target.className == 'num'){
        if(num1Str.length !== 0 && flag == 1){
            num2Str+=e.target.id;
            // console.log(num2Str);
        }
        else{
        num1Str+=e.target.id;
        }
        
        
    }

    if(e.target.className == 'operator'){
        sign = e.target.id;
        // console.log(sign);
        flag = 1;
    }

    if(e.target.className == 'clear'){
        clearAll();
        return;
    }

    if(e.target.className == 'delete'){
        del(e);
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
 location.reload();
}

function del() {
    let event = arrBefore[arrBefore.length-2];
    // console.log(event);
   
    if(event.target.className == 'num'){
        if(flag == 0){
            let num1Slice = num1Str.slice(0,-1);
            num1Str = num1Slice;
            // console.log(num1Str);
        }
        else
        {
            let num2Slice = num2Str.slice(0,-1);
            num2Str = num2Slice; 
            console.log(num2Str);
        }
    }
    if(event.target.className == 'operator'){
        sign = '';
    }
    let content = input.textContent;
    let slice = content.slice(0,-1);
    input.textContent = slice;
    
}














