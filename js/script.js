document.getElementById('calculate_btn').addEventListener('click', function(){
    let incomeInput = document.getElementById('income_input');
    let incomeInputValue = parseFloat(incomeInput.value);

    // Error Handaling And Value Check 

    if ( incomeInputValue > 0 || typeof incomeInputValue == 'string'){
        let  totalExpense = addSubTotal()
        let totalAmount = incomeInputValue - addSubTotal()

       document.getElementById('total_expense').innerText = totalExpense;
       document.getElementById('balance').innerText = totalAmount;
    }
    else{
        let warningMsg = document.getElementById('warning_msg');
        warningMsg.style.display = 'block';
    }

})


// Subtotal Addition Function 
function addSubTotal(){
    let foodInput = document.getElementById('food_input').value;
    let rentInput = document.getElementById('rent_input').value;
    let clothsInput = document.getElementById('cloths_input').value;
    let totalExpense = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothsInput);
    return totalExpense
}

document.getElementById('savings_calculate').addEventListener('click', function(){
    let savingsInput = document.getElementById('savings_input');
    let savingsInputValue = parseFloat(savingsInput.value)
   
    let previousBalance = document.getElementById('balance').innerText;
    let savingsBalance = (savingsInputValue / 100) * previousBalance;
    let availableBalance = previousBalance - savingsBalance

    if(previousBalance < savingsBalance){
        alert('Please')
    }
    else{
        document.getElementById('saving_amount').innerText = savingsBalance;
        document.getElementById('remianing_balance').innerText = availableBalance
    }

})