//add
const add = ()=>{
    let count = 0;
    const check1 = document.getElementById("check1").checked === true;
    const check2 = document.getElementById("check2").checked === true;
    const check3 = document.getElementById("check3").checked === true;
    let numb1,numb2,numb3,result;
if(check1){
     numb1 = parseInt(document.getElementById('number1').value);
     count +=1;
}
if(check2){
         numb2 = parseInt(document.getElementById('number2').value);
         count +=1;
    }
if(check3){
     numb3 = parseInt(document.getElementById('number3').value);
     
    count +=1;
        }

if(count===2){
    //add here  
    result = (check1==false)? numb2 +numb3
    :(check2==false)? numb1+numb3
    : numb1+numb2;
    document.getElementById('result').value = String(result);

}
else if (count==3){
     result = numb1 + numb2 + numb3;
    document.getElementById('result').value = String(result);
} 
else {
alert("error need 2 input atleast")
}
}
// subtract
const subtract = ()=>{
    let count = 0;
    const check1 = document.getElementById("check1").checked === true;
    const check2 = document.getElementById("check2").checked === true;
    const check3 = document.getElementById("check3").checked === true;
    let numb1,numb2,numb3,result;
if(check1){
     numb1 = parseInt(document.getElementById('number1').value);
     count +=1;
}
if(check2){
         numb2 = parseInt(document.getElementById('number2').value);
         count +=1;
    }
if(check3){
     numb3 = parseInt(document.getElementById('number3').value);
     
    count +=1;
        }

if(count===2){
    //add here  
    result = (check1==false)? numb2 -numb3
    :(check2==false)? numb1-numb3
    : numb1-numb2;
    document.getElementById('result').value = String(result);

}
else if (count==3){
     result = numb1 - numb2 - numb3;
    document.getElementById('result').value = String(result);
} 
else {
alert("error need 2 input atleast")
}
}
//multiply 
const multiply = ()=>{
    let count = 0;
    const check1 = document.getElementById("check1").checked === true;
    const check2 = document.getElementById("check2").checked === true;
    const check3 = document.getElementById("check3").checked === true;
    let numb1,numb2,numb3,result;
if(check1){
     numb1 = parseInt(document.getElementById('number1').value);
     count +=1;
}
if(check2){
         numb2 = parseInt(document.getElementById('number2').value);
         count +=1;
    }
if(check3){
     numb3 = parseInt(document.getElementById('number3').value);
     
    count +=1;
        }

if(count===2){
    //add here  
    result = (check1==false)? numb2 *numb3
    :(check2==false)? numb1*numb3
    : numb1*numb2;
    document.getElementById('result').value = String(result);

}
else if (count==3){
     result = numb1 * numb2 * numb3;
    document.getElementById('result').value = String(result);
} 
else {
alert("error need 2 input atleast")
}
}
//divide 
const divide = ()=>{
    let count = 0;
    const check1 = document.getElementById("check1").checked === true;
    const check2 = document.getElementById("check2").checked === true;
    const check3 = document.getElementById("check3").checked === true;
    let numb1,numb2,numb3,result;
if(check1){
     numb1 = parseInt(document.getElementById('number1').value);
     count +=1;
}
if(check2){
         numb2 = parseInt(document.getElementById('number2').value);
         count +=1;
    }
if(check3){
     numb3 = parseInt(document.getElementById('number3').value);
     
    count +=1;
        }

if(count===2){
    //add here  
    result = (check1==false)? numb2 /numb3
    :(check2==false)? numb1/numb3
    : numb1/numb2;
    document.getElementById('result').value = String(result);

}
else if (count==3){
     result = numb1 / numb2 / numb3;
    document.getElementById('result').value = String(result);
} 
else {
alert("error need 2 input atleast")
}
} 

