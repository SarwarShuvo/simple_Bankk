// Deposit Button Event 
document.getElementById('deposit-btn').addEventListener('click', function () {

    // Get Deposit Amount 
    const depositField = document.getElementById('user-deposit');
    const previousDeposit = parseFloat(depositField.value);

    // Show Deposit amount on Deposit part 
    const depositTotal = document.getElementById('deposit');
    const currentDeposit = parseFloat(depositTotal.innerText);

    // set total Deposit 
    const newDeposit = (currentDeposit + previousDeposit);
    depositTotal.innerText = newDeposit;

    // ....................................................................................... 

    // Show Balance amount on Balance Section  
    const previousBalance = document.getElementById('balance');
    const currentBalance = parseFloat(previousBalance.innerText);

    // Set total Balance 
    const newBalance = parseFloat(currentBalance + previousDeposit);
    previousBalance.innerText = newBalance;


    // Deposit Input field Null  
    depositField.value = '';
});

// Withdraw Button Event  