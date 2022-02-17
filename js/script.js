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
        showWarningMsg('warning_msg_1')
    }
    
})


// Subtotal Addition Function 
function addSubTotal(){
    let foodInput = document.getElementById('food_input').value;
    let rentInput = document.getElementById('rent_input').value;
    let clothsInput = document.getElementById('cloths_input').value; 
    let totalExpense = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothsInput);
    return totalExpense; 
}


document.getElementById('savings_calculate').addEventListener('click', function(){
    let savingsInput = document.getElementById('savings_input');
    let savingsInputValue = parseFloat(savingsInput.value)
   
    let previousBalance = document.getElementById('balance').innerText;
    let savingsBalance = (savingsInputValue / 100) * previousBalance;
    let availableBalance = previousBalance - savingsBalance

    if(previousBalance < savingsBalance){
       showWarningMsg('warning_msg_2')
    }
    else{
        document.getElementById('saving_amount').innerText = savingsBalance;
        document.getElementById('remianing_balance').innerText = availableBalance
    }

})



function validate(){
    let foodInput = document.getElementById('food_input').value;
    let rentInput = document.getElementById('rent_input').value;
    let clothsInput = document.getElementById('cloths_input').value

    if( foodInput > 0 || typeof foodInput == 'string'){
        alert('Please Provide A Number');
        return false;
    }
    if( rentInput > 0 || typeof rentInput == 'string'){
        alert('Please Provide A Number');
        return false;
    }
    if( clothsInput > 0 || typeof clothsInput == 'string'){
        alert('Please Provide A Number');
        return false;
    }
    return (true)  
}



// Error Message Handaling With Function 
function showWarningMsg(idName){
    let showWarn = document.getElementById(idName);
    showWarn.style.display = 'block';
}

function hideWarningMsg(idName){
    let hideWarn = document.getElementById(idName);
    hideWarn.style.display = 'none';
}

document.getElementById('warning_btn_1').addEventListener('click', function(){
   hideWarningMsg('warning_msg_1');
})
document.getElementById('warning_btn_2').addEventListener('click', function(){
   hideWarningMsg('warning_msg_2');
})
document.getElementById('warning_btn_3').addEventListener('click', function(){
   hideWarningMsg('warning_msg_3');
})
