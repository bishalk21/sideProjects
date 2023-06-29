let count = 0;
const countElm = document.getElementById("count");

// increment function
const incrementFunc = () => {
  count++;
  updateCount();
};

// decrement function
const decrementFunc = () => {
  count--;
  if (count >= 0) {
    updateCount();
  } else {
    // alert("only positive integers are allowed...");
    showAlert("only positive integers are allowed...");
  }
};

// alert function
const showAlert = (message) => {
  alert(message);
};

// set to zero
const setZero = () => {
  count = 0;
  updateCount();
};

// updating the count in DOM
const updateCount = () => {
  countElm.innerText = count;
};

// print the value in console
const printValue = () => {
  console.log(count);
};

// challenge to better the function call. Use one function,
// call it Inc and pass 2 variables. Some sample calls would look like the following:
// Inc(x,1)  increments x by 1
// Inc(x,-1) decrement x by 1
// Inc(x,5)
// Inc(x,-10)
let counter = 0;
const countElement = document.getElementById("count");

// Function to increment or decrement the count
const Inc = (x, n) => {
  counter += n;

  if (counter < 0) {
    msgAlert("Negative numbers are not allowed... 🙃");
    counter -= n;
  }

  updateCounter();
};

// decrement the counter
const Decre = () => {
  Inc(counter, -1);
};

// setting to zero
const setToZero = () => {
  Inc(counter, -counter);
};

// Update the count in the DOM
const updateCounter = () => {
  countElement.innerText = counter;
};

// Show an alert message
const msgAlert = (message) => {
  alert(message);
};

// Increment the count by 1
// Inc(x, 1);

// Decrement the count by 1
// Inc(x, -1);

// Increment the count by 5
// Inc(x, 5);

// Decrement the count by 10
// Inc(x, -10);

// print the counter in console
const printCounter = () => {
  console.log(counter);
};
