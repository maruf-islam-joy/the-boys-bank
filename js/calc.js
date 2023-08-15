//Deposit calculation

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositString = document.getElementById('deposit-area').value;

    const newDeposit = parseFloat(newDepositString);

    if(!isNaN(newDeposit) && newDeposit>0){
        const prevBalanceString = document.getElementById('balance-total').innerText;

        const prevBalance = parseFloat(prevBalanceString);

        document.getElementById('balance-total').innerText = newDeposit+prevBalance;

        const prevDepositString = document.getElementById('deposit-total').innerText;

        const prevDeposit = parseFloat(prevDepositString);


        document.getElementById('deposit-total').innerText = newDeposit+prevDeposit;

        document.getElementById('deposit-area').value = '';


    }else{
        alert('Hey dude! Insert valid money to deposit. Do not dare to play with the boys!!')
    }
})



// withdraw calculation 


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawString = document.getElementById('withdraw-area').value;

    const newWithdraw = parseFloat(newWithdrawString);

    if(!isNaN(newWithdraw) && newWithdraw>0 ){
        const prevBalanceString = document.getElementById('balance-total').innerText;

        const prevBalance = parseFloat(prevBalanceString);

        if(prevBalance>=newWithdraw){
            document.getElementById('balance-total').innerText = prevBalance-newWithdraw;

            const prevWithdrawString = document.getElementById('withdraw-total').innerText;

            const prevWithdraw = parseFloat(prevWithdrawString);


            document.getElementById('withdraw-total').innerText = newWithdraw+prevWithdraw;

            document.getElementById('withdraw-area').value = '';  
        }else{
            alert("Balance is out!")
        }


    }else{
        alert('Hey dude! Insert valid money to withdraw. Do not dare to play with the boys!!')
    }
})