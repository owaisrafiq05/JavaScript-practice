// alert("HELLO WORLD3");
        // alert("HELLO WORLD2");
        // alert("HELLO WORLD1");

        // Compiler => Read all Code and then generate output
        // Interpreter => line allingmnet
        // Assembler => assembler lang
        // Javascript always use interpreter
        // syntax is how to write the code

        // var num1 = 10;
        // var num2 = 5;
        // var result = 10 + 15;
        // var username = "Owais Rafiq"

        // console.log(num1);
        // console.log(num2);  
        // console.log(username);
        // console.log(result);

        // Program which add two number
        var Num1 = 450;
        var Num2 = 600;

        var add = Num1 + Num2;

        console.log("add", add);


    // var => keyword
    // firstname => first name
    // = => assigning operator
    // Owais => variable value

        var firstname = "Owais";
        var lastname = "Rafiq";

        var num = 1000;

    // Concatination condition

        var num1 = 500;
        var num2 = 200;

        var add = "500" + "200";

        console.log("add", add);

    // in inverted commas it act as a concadinate condition and it gives a output 500200 and if we simply write without commas so the output will be 700



    // DATA TYPES:
    // 1) string => group of character. string will always identify inside double quotation containing data ""
    var firstname = "Owais";  //String
    // 2) Number => group of number. number will always without the quotation
    var num10 = 1000; //Number
    // 3) Boolean 
    // 4) null
    // 5) defined

    

    // Only there's the chance that + operator do concatinate others arthemetic operator don't perform concatinate function.

    var num11 = 10 + 5 * (10-2) - 10; //BODMAS RULE
    console.log("result", num11);

    

    var num12 = "10" + 10 + 10;
                // "1010" + 10
                // "101010" (answer)
    console.log("answer", num12);

    ////////

    var num13 = 20 - "10" + 10 + ("10" -10);
                // 20 -"10" + 10 + (0)
                // 20 - "10" + 10 + 0
                // 20 - "1010" + 0
                // 20 - "10100" 
                // -2010100 (answer)

    console.log("answer", num13)

    ////////

    var num14 = 10;
    num14 += 5;
    console.log("result", num14);

    /////////


    //post increament (number++) => it means number will first print and then it will add
    var num15 =  15;
    console.log("post increament", num15++);//15
    console.log("result", num15);//16

    ////////

    // pre-increament (++number) => it means it will add number first and then it will print
    var num16 =  15;
    console.log("pre increament", ++num16);//16
    console.log("result", num16);//16

    ////////
    var num17 = 15;
    console.log("post-increament", num17--);//15
    console.log("result", num17);//14

    /////////

    var num18 = 15;
    console.log("pre-increament", --num18);//15
    console.log("result", num18);//14

    /////////

    var num19 = 10 //11 //12 //13
    var result = num19++ + num19++ + ++num19;
                // 10 + 11 + 13;
    console.log("result", result);

    /////////

    var num20 = 10; //11 //12 //13
    var result1 = num20 + ++num20 + num20++ + num20 + num20++;
                //10 + 11 + 12 + 10 + 13
    console.log("result", result1);  

    ///////

    var num21 = 10; //11 //12 //13 //14
    var result2 = num21 + ++num21 + ++num21 + num21++ + ++num21 + num21;
                //10 + 11 + 12 + 12 + 14 + 14 
    console.log("result", result2); 

    ///////

    var num22 = 10; //11 //10 //11 //10
    var result3 = num22 - num22++ + --num22 + num22++ + num22--;
                //10 - 11 + 10 + 11 + 11;
    console.log("result", result3);

    ///////
    var num23 = 10; //11 //10
    var result = num23 + ++num23 + num23++ + --num23 - num23-- - --num23;
                //10 + 11 + 11 + 10 - 10 - 9 
    console.log("result",result);

    ////// 
    var num24 = 12; //13 //12 //12 //13 //12 //11
    var result = num24++ - --num24 + num24 + ++num24 + num24-- - --num24;
                //12 - 12 + 12 + 13 + 13 - 11  
    console.log("result",result);

    //////
     var num25 = 25; //24 //25 //26 //25 //24 //23
     var result = num25-- + num25++ + num25++ - --num25 - --num25 - num25-- + num25;
                //25 + 24 + 25 - 25 - 24 - 24 + 23 = 24
     console.log(result);

     //////
     var num26 = 38; 
     var result = ++num26 + ++num26 - --num26 - num26 + num26;
                //39 + 40 - 39 - 39 + 39 = 40
     console.log(result);

     //////
     var num27 = 8;
     var result = num27 + num27 + ++num27 + --num27 - --num27 + ++num27 + --num27 - num27;
                //8 + 8 + 9 + 8 - 7 + 8 + 7 - 7 = 34
     console.log(result);

     /////

     var stdStatus = true; //boolean
     var stdStatus = "true"; //string

     //////
     
    //  var userName = prompt("Enter Your Name"); // prompt is the method to take input from the user 
    //  console.log("username", userName);

     //////

    //  var userAge = prompt("Enter Your Age"); 
    //  console.log("Age", userAge);

    //////


    // var firstName = prompt("enter your first name", "Owais Rafiq"); // name owais rafiq as a sample/default value for user so he/she can take this name as a sample and can understand how to write code.
    // var lastName = prompt("enter your last name");
    // var fullName = firstName + " " + lastName; //we use concadinate to join first name and last name to make full name as a result
    // console.log("Full Name:", fullName);

    /////

    // = => assigning out
    // == => to equal something
    // === => Compare the value of Datatypes and numbers

    /////

    // if => true
    // else => false
    // else if => for multiple condition
    
//     var stdAge = prompt("Enter Your Age");
//     if(stdAge == 20){
//         console.log("Allow");
//     }
//    else if (stdAge == 25){
//         console.log("Allow");
//     }
//     else if (stdAge == 30){
//         console.log("Allow");
//     }
//     else if (stdAge == 35){
//         console.log("Allow");
//     }
//     else{
//         console.log("Not Allow");
//     }

////// making calculator

// var num35 = +prompt("Enter Num1");
// var num36 = +prompt("Enter Num2");
// var opt = prompt("Enter Opt", "+,-,*,/");

// if (opt == "+"){
//     console.log(num1 + num2);
// }
// else if (opt == "-"){
//     console.log(num1 - num2);
// }
// else if (opt == "*"){
//     console.log(num1 * num2);
// }
// else if (opt == "/"){
//     console.log(num1 / num2);
// }
// else{
//     console.log("ERROR");
// }

/////

// > => greater than
// < => less than
// => => greater than and equal to
// <= => less than and equal to

/////

// var gender = prompt("Enter Your Gender");
// console.log("gender",gender);
// if(gender == "male"){
//     console.log("Boys Section");
// }
// else{
//     console.log("Not Allowed");
// }

/////

// var salary = prompt("Enter Your Salary");
// console.log("Salary = ",salary);
// if(salary > 100000){
//     console.log("can survive");
// }
// else{
//     console.log("can't survive");
// }

// GATES 
// && => AND gate
// || => OR gate
// ! => NOT gate

//////

// var age = 19;
// if(age >=18 && age <=40){
//     console.log("ALLOW");
// }
// else{
//     console.log("NOT ALLOW");
// }

////

// var age = 19;
// var gender = "male"; 
// if(age >=18 && age <=40 && gender === "male" || gender === "female"){
//     console.log("ALLOW");
// }
// else{
//     console.log("NOT ALLOW");
// }

/////
//// Marksheet calculator

// var marks = prompt("Enter your Marks");
// console.log("marks",marks);
// if (marks<=100 && marks>=80){
//     console.log("You have scored A+ grade");
// }
// else if (marks<=79 && marks>=70){
//     console.log("You have scored A grade");
// }
// else if (marks<=69 && marks>=60){
//     console.log("You have scored B grade");
// }
// else if (marks<=59 && marks>=51){
//     console.log("You have scored C grade");
// }
// else if(marks<=50 && marks>=0){
//     console.log("Sorry, You have scored F grade");
// }
// else{
//     console.log("ERROR");
// }

/////

var emailid = prompt("Enter Email id");
var emailpass = prompt("Enter the password");
if(emailid == "admin@gmail.com" && emailpass == "pass12345"){
    console.log("LOG IN");
}
else{
    console.log("Invalid Email and Password");
}

////
var fruit1 = "apple";
var fruit2 = "orange";
var fruit3 = "mango";

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

////
//by using array we can write above situation in a single line
// in array memory is used index wise
//index always start with zero 
// [] => empty array

var fruit = ["apple","orange","mango"];
console.log(fruit);

/////

var countryArray = [];
countryArray[0] = "Pakistan";
countryArray[1] = "India";
countryArray[2] = "China";
countryArray[4] = "USA";
console.log(countryArray);