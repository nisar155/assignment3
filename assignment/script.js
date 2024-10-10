var inputEmail4 = document.getElementById("inputEmail4")
var inputPassword4 = document.getElementById("inputPassword4")
var inputphno = document.getElementById("inputphno")
var err1 = document.getElementById("err1");
var err2 = document.getElementById("err2");
var err3 = document.getElementById("err3");
function popup(){
     let regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/
     let phno = /^\d{10}$/
     let pass= /^.{8,}$/
    if(inputEmail4.value.trim()==""||inputPassword4.value.trim()==""||inputphno.value.trim()==""){
        alert("Field cannot be empty");
    return false;
    }
    else if(!regexp.test(inputEmail4.value)){
        err1.innerText="Email is invalid";
        err1.style.color="red"
        return false;
    }
    else if(!phno.test(inputphno.value)){
        err2.innerText="Must be 10 digits";
        err2.style.color="red"
        return false;

    }
    else if(!pass.test(inputPassword4.value)){
        err3.innerText="Character must be more than 8 characters";
        err3.style.color="red"
        return false;
    }
    else{
        return true;
    }
}

// function check(){
   
//     if(regexp.test(inputEmail4.value)){
//         err1.innerText="Email is valid";
//         err1.style.color="green"
//         return true;
//     }
//     else{
//         err1.innerText="Email is invalid"
//         err1.style.color="red"
//         return false;
//     }
// }