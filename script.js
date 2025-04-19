function nameVerifier(name){
    let flag = name.nextElementSibling.children[0]
    let tester = /^[a-zA-z][a-zA-Z\s,]+$/
    if(name.value.length > 3 && tester.test(name.value)){
        flag.innerText = 'Valid Name'
        flag.style.color = 'green'
        return true
    }
    flag.innerText = 'Enter a valid name'
    flag.style.color = 'red'
    return false
}


function emailVerifier(email){
    let flag = email.nextElementSibling.children[0]
    let tester = /^[a-zA-Z](?!.*\.\.)[a-zA-Z\d+\.%]{1,}[a-zA-Z\d]@(gmail|outlook|yahoo)\.com$/
    if(tester.test(email.value)){
        flag.innerText = 'Valid Email'
        flag.style.color = 'green'
        return true
    }
    flag.innerText = 'Enter a valid email'
    flag.style.color = 'red'
    return false
}

function passwordVerifier(password){
    let flag = password.parentNode.nextElementSibling
    let tester = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,20}$/

    // console.log(flag)
    if(tester.test(password.value)){
        flag.innerHTML = 'Valid Password'
        flag.style.color = 'green'
        return true
    }
    flag.innerHTML = `<span>Enter a valid Password</span><br> 
        <ul>
            <li>At least one digit</li>
            <li>At least one lowercase letter</li>
            <li>At least one uppercase letter</li>
            <li>At least one special character (not letter, digit, or underscore)</li>
            <li>8-20 characters</li>
        </ul>
    `
    flag.style.color = 'red'
    return false
}

function showPassword(eye){
    let password = eye.previousElementSibling;
    // console.log(password.type=='password')
    if(password.type!="password"){
        password.type = 'password'
        eye.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
        `
        // password.value = password.value
        return 'open' 
    }
    password.type = 'text'
    eye.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`
    // password.value = password.value
    return 'closed'
}

function confirmPassword(password2){
    let flag = password2.parentNode.nextElementSibling
    let p1 = document.querySelector("#pass1")
    // console.log(flag)
    if(password2.value == p1.value){
        flag.innerHTML = 'Correct! A Match'
        flag.style.color = 'green'
        return true
    }
    flag.innerHTML = 'Incorrect'
    flag.style.color = 'red'
    return false
}


const checkBox = document.querySelector('#checkbox')
let ops = document.querySelector('.ops')
function checker(){
    console.log('This works')

    if(!checkBox.checked){
        checkBox.checked = true
        ops.style.display = 'block'
        console.log(checkBox.checked)
        return 1
    }
    
    checkBox.checked = false
    console.log(checkBox.checked)
    ops.style.display = 'none'
    return 0 
}