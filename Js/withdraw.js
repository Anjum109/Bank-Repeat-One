/*
1. add event handler with the withdraw button
2. get the withdraw amount
3.clear the withdraw input field
4.get previuous withdraw total
5. calculate total withdraw amount and set it to the withdraw total element
6 . get previous value
*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step 2
    const withdrawfield = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawfield.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step 3
    withdrawfield.value = '';
    // step-4 
    const withdrawTotralElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotralElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step 5 
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotralElement.innerText = newWithdrawTotal;
    // step 6 
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalstring = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);
    // step 7 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})