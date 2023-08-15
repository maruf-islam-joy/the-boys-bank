document.getElementById('login-btn').addEventListener('click',function(){
    const userEmail = document.getElementById('userEmail').value;
    const pass = document.getElementById('password').value;

    if(userEmail !== 'boys@regim.com' || pass !== '123boys'){
        alert('Wrong Password! Are you a intruder? Be careful!!!')
    }else{
        window.location.href = './bank.html' 
    }

})