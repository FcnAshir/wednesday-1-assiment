#!/usr/bin/env node

import inquirer from "inquirer"
const email :string ="geo1223@gmail.com"
const passward :number = 1234
let input = await inquirer.prompt([{
    name:"as",
    type:"input",
    message:"Enter your email!"
    
    
    
    
}]);
let inputs = await inquirer.prompt([{
    name:"ash",
    type:"input",
    message:"Enter your passward!"
    
    
    
    
}])
if(input.as = email && passward){
console.log("Your email is correct")
}if(inputs.ash= email && passward){
  console.log("Your passward is correct \n successfully login!")
  
}


else{
    console.log("Wrong password Or Email")
}