// Declare the variables
let grocery1;
let grocery2;
let grocery3;

// Create a function
function CalculateTotal() {
  // Fetch values from the user inputs
  grocery1 = parseFloat(document.getElementById('grocery1').value);
  grocery2 = parseFloat(document.getElementById('grocery2').value);
  grocery3 = parseFloat(document.getElementById('grocery3').value);

  // Calculate the total amount
  let TotalAmount = grocery1 + grocery2 + grocery3;

  // Display the result to the user interface
  document.getElementById('total').innerText = `The total Amount is: ${TotalAmount}`;
}
