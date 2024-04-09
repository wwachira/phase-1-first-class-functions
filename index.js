//callback function as an argument
//function takes a callback function as an argument
function receivesAFunction(callback) {
    //Inside our function, calls the provided callback
    console.log("Function receivesAFunction is calling the provided callback function");
    callback(); // Calling the callback function
  }
  
  // output example
  function myCallback() {
    console.log("This is the callback function being called by the function.");
  }
  
  receivesAFunction(myCallback);//callback function 

  //2.take no arguments/return a named function 
  function receivesAFunction(callback) {
    // receivesAFunction is calling the provided callback function
    callback(); 
  }
  //myCallback function returned by returnsMyNamedCallback
  function returnsMyNamedCallback() {
    return function myCallback() {
     
    };
  }
  //3.This is an anonymous function returned by returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return function() {
    };
}
