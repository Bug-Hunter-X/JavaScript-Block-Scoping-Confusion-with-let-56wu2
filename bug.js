function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This x is only in scope within this block
  }
  console.log(x); // This will log 10, not 20
}