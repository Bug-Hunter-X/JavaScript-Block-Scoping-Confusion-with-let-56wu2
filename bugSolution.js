function myFunction() {
  let x = 10;
  if (true) {
    x = 20; // Accessing and modifying the x declared outside the block
  }
  console.log(x); // This will log 20
}

//Alternative solution to show different variable names:
function myFunction2() {
  let x = 10;
  if (true) {
    let y = 20; 
  }
  console.log(x); // This will log 10
}