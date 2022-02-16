document.getElementById('calculate_btn').addEventListener('click', function(){
    let incomeInput = document.getElementById('income_input');
    let incomeInputValue = parseInt(incomeInput.value);
    
    if(incomeInputValue > 0){
        let totalAmount = incomeInputValue - addSubTotal();
        document.getElementById('total_expense').innerText = addSubTotal();
        document.getElementById('balance').innerText = totalAmount;
    }
    else {
        let warningMsg = document.getElementById('warning_msg');
        warningMsg.style.display = "block";

    }    
})


function addSubTotal(){
    let foodInput = document.getElementById('food_input').value;
    let rentInput = document.getElementById('rent_input').value;
    let clothsInput = document.getElementById('cloths_input').value;
    let totalExpense = parseInt(foodInput) + parseInt(rentInput) + parseInt(clothsInput);
    return totalExpense
}



document.getElementById('savings_calculate').addEventListener('click', function(){
    let savingsInput = document.getElementById('savings_input');
    let savingsInputValue = parseInt(savingsInput.value)
    let previousBalance = document.getElementById('balance').innerText;
    let savingsBalance = (savingsInputValue / 100) * previousBalance;
    let availableBalance = previousBalance - savingsBalance
    document.getElementById('saving_amount').innerText = savingsBalance;
    document.getElementById('remianing_balance').innerText = availableBalance

})