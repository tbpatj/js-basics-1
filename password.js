
const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome User to the password validator tool");

reader.question("What password would you like to validate?", function(answer){
    let hasNum = false;
    let hasSpecialChar = false;
    let meetsLengthReq = String(answer).length >= 10;

    //iterate through each char in the answer given
    for(let i = 0; i < String(answer).length; i ++){
        let charCode = answer.charCodeAt(i);
        //this checks the charcode of the char with numbers 0 - 9, 0's code being 49 and 9's being 57
        if(charCode >= 48 && charCode <= 57){
            hasNum = true;
        }
        
    }
    //check if it has any other values that aren't numerical or alphabetical
    if(/^[a-zA-Z0-9]*$/.test(answer) == false){
        hasSpecialChar = true;
    }
    
    //see if the password meets the requirements
    if(meetsLengthReq && hasNum && hasSpecialChar){
        console.log(" "); //give some room so you can seeeee
        console.log(`
#   /$$$$$$$$/$$                 /$$                                                                    /$$  
#  |__  $$__| $$                | $$                                                                   | $$  
#     | $$  | $$$$$$$  /$$$$$$ /$$$$$$  /$$$$$$$        /$$$$$$         /$$$$$$  /$$$$$$  /$$$$$$  /$$$$$$$  
#     | $$  | $$__  $$|____  $|_  $$_/ /$$_____/       |____  $$       /$$__  $$/$$__  $$/$$__  $$/$$__  $$  
#     | $$  | $$  \ $$ /$$$$$$$ | $$  |  $$$$$$         /$$$$$$$      | $$  \ $| $$  \ $| $$  \ $| $$  | $$  
#     | $$  | $$  | $$/$$__  $$ | $$ /$\____  $$       /$$__  $$      | $$  | $| $$  | $| $$  | $| $$  | $$  
#     | $$  | $$  | $|  $$$$$$$ |  $$$$/$$$$$$$/      |  $$$$$$$      |  $$$$$$|  $$$$$$|  $$$$$$|  $$$$$$$  
#     |__/  |__/  |__/\_______/  \___/|_______/        \_______/       \____  $$\______/ \______/ \_______/  
#                                                                      /$$  \ $$                             
#                                                                     |  $$$$$$/                             
#                                                                      \______/                              
#                                                                                                         /$$
#                                                                                                        | $$
#                                  /$$$$$$  /$$$$$$  /$$$$$$$/$$$$$$$/$$  /$$  /$$ /$$$$$$  /$$$$$$  /$$$$$$$
#                                 /$$__  $$|____  $$/$$_____/$$_____| $$ | $$ | $$/$$__  $$/$$__  $$/$$__  $$
#                                | $$  \ $$ /$$$$$$|  $$$$$|  $$$$$$| $$ | $$ | $| $$  \ $| $$  \__| $$  | $$
#                                | $$  | $$/$$__  $$\____  $\____  $| $$ | $$ | $| $$  | $| $$     | $$  | $$
#                                | $$$$$$$|  $$$$$$$/$$$$$$$/$$$$$$$|  $$$$$/$$$$|  $$$$$$| $$     |  $$$$$$$
#                                | $$____/ \_______|_______|_______/ \_____/\___/ \______/|__/      \_______/
#                                | $$                                                                        
#                                | $$                                                                        
#                                |__/                                                                        
`)
        console.log("Thats a good password, you aren't getting hacked anytime soon");
    } else{
        //you had a bad password
        console.log("yikes thats a crummy password...");
    }


    //This block prints out what requirements have and haven't been met
    if(meetsLengthReq){
        console.log(String.fromCharCode(9989) + " Password has at least 10 characters");
    } else{
        console.log(String.fromCharCode(10060) + " Password should have at least 10 characters");
    }

    if(hasNum){
        console.log(String.fromCharCode(9989) + " Password has at least 1 number");
    } else {
        console.log(String.fromCharCode(10060) + " Password should have at least 1 number");
    }

    if(hasSpecialChar){
        console.log(String.fromCharCode(9989) + " Password has at least 1 special character");
    } else {
        console.log(String.fromCharCode(10060) + " Password should have at least 1 special character");
    }
    //end of requirement print outs
});



