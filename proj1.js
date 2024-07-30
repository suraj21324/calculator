function calculate(value) 
{
    const inputText = document.getElementById("inputext");

    if (value === 'C') 
    {
        // Handle clear button
        inputText.value = "0";
    } 



    else if (value === 'DEL')
     {
        // Handle delete button

        inputText.value = inputText.value.slice(0,-1);
        } 
    else
     {
        // Handle other buttons and add the value to the input field
        inputText.value += value;
    }
}

function Result() 
{
    const inputText = document.getElementById("inputext");
    // Add logic to calculate the result here and update the input field
    try {
        const result = eval(inputText.value);
        inputText.value = result;
    }
     catch (error) {
        inputText.value = "Error";
    }
}
