// // alert("HELLO WORLD3");
//         // alert("HELLO WORLD2");
//         // alert("HELLO WORLD1");

//         // Compiler => Read all Code and then generate output
//         // Interpreter => line allingmnet
//         // Assembler => assembler lang
//         // Javascript always use interpreter
//         // syntax is how to write the code

//         // var num1 = 10;
//         // var num2 = 5;
//         // var result = 10 + 15;
//         // var username = "Owais Rafiq"

//         // console.log(num1);
//         // console.log(num2);  
//         // console.log(username);
//         // console.log(result);

//         // Program which add two number
//         var Num1 = 450;
//         var Num2 = 600;

//         var add = Num1 + Num2;

//         console.log("add", add);


//     // var => keyword
//     // firstname => first name
//     // = => assigning operator
//     // Owais => variable value

//         var firstname = "Owais";
//         var lastname = "Rafiq";

//         var num = 1000;

//     // Concatination condition

//         // var num1 = 500;
//         // var num2 = 200;

//         // var add = "500" + "200";

//         // console.log("add", add);

//     // in inverted commas it act as a concadinate condition and it gives a output 500200 and if we simply write without commas so the output will be 700



//     // DATA TYPES:
//     // 1) string => group of character. string will always identify inside double quotation containing data ""
//     var firstname = "Owais";  //String
//     // 2) Number => group of number. number will always without the quotation
//     var num10 = 1000; //Number
//     // 3) Boolean 
//     // 4) null
//     // 5) defined

    

//     // Only there's the chance that + operator do concatinate others arthemetic operator don't perform concatinate function.

//     var num11 = 10 + 5 * (10-2) - 10; //BODMAS RULE
//     console.log("result", num11);

    

//     var num12 = "10" + 10 + 10;
//                 // "1010" + 10
//                 // "101010" (answer)
//     console.log("answer", num12);

//     ////////

//     var num13 = 20 - "10" + 10 + ("10" -10);
//                 // 20 -"10" + 10 + (0)
//                 // 20 - "10" + 10 + 0
//                 // 20 - "1010" + 0
//                 // 20 - "10100" 
//                 // -2010100 (answer)

//     console.log("answer", num13)

//     ////////

//     var num14 = 10;
//     num14 += 5;
//     console.log("result", num14);

//     /////////


//     //post increament (number++) => it means number will first print and then it will add
//     var num15 =  15;
//     console.log("post increament", num15++);//15
//     console.log("result", num15);//16

//     ////////

//     // pre-increament (++number) => it means it will add number first and then it will print
//     var num16 =  15;
//     console.log("pre increament", ++num16);//16
//     console.log("result", num16);//16

//     ////////
//     var num17 = 15;
//     console.log("post-increament", num17--);//15
//     console.log("result", num17);//14

//     /////////

//     var num18 = 15;
//     console.log("pre-increament", --num18);//15
//     console.log("result", num18);//14

//     /////////

//     var num19 = 10 //11 //12 //13
//     var result = num19++ + num19++ + ++num19;
//                 // 10 + 11 + 13;
//     console.log("result", result);

//     /////////

//     var num20 = 10; //11 //12 //13
//     var result1 = num20 + ++num20 + num20++ + num20 + num20++;
//                 //10 + 11 + 12 + 10 + 13
//     console.log("result", result1);  

//     ///////

//     var num21 = 10; //11 //12 //13 //14
//     var result2 = num21 + ++num21 + ++num21 + num21++ + ++num21 + num21;
//                 //10 + 11 + 12 + 12 + 14 + 14 
//     console.log("result", result2); 

//     ///////

//     var num22 = 10; //11 //10 //11 //10
//     var result3 = num22 - num22++ + --num22 + num22++ + num22--;
//                 //10 - 11 + 10 + 11 + 11;
//     console.log("result", result3);

//     ///////
//     var num23 = 10; //11 //10
//     var result = num23 + ++num23 + num23++ + --num23 - num23-- - --num23;
//                 //10 + 11 + 11 + 10 - 10 - 9 
//     console.log("result",result);

//     ////// 
//     var num24 = 12; //13 //12 //12 //13 //12 //11
//     var result = num24++ - --num24 + num24 + ++num24 + num24-- - --num24;
//                 //12 - 12 + 12 + 13 + 13 - 11  
//     console.log("result",result);

//     //////
//      var num25 = 25; //24 //25 //26 //25 //24 //23
//      var result = num25-- + num25++ + num25++ - --num25 - --num25 - num25-- + num25;
//                 //25 + 24 + 25 - 25 - 24 - 24 + 23 = 24
//      console.log(result);

//      //////
//      var num26 = 38; 
//      var result = ++num26 + ++num26 - --num26 - num26 + num26;
//                 //39 + 40 - 39 - 39 + 39 = 40
//      console.log(result);

//      //////
//      var num27 = 8;
//      var result = num27 + num27 + ++num27 + --num27 - --num27 + ++num27 + --num27 - num27;
//                 //8 + 8 + 9 + 8 - 7 + 8 + 7 - 7 = 34
//      console.log(result);

//      /////

//      var stdStatus = true; //boolean
//      var stdStatus = "true"; //string

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

// var emailid = prompt("Enter Email id");
// var emailpass = prompt("Enter the password");
// if(emailid == "admin@gmail.com" && emailpass == "pass12345"){
//     console.log("LOG IN");
// }
// else{
//     console.log("Invalid Email and Password");
// }

////
// var fruit1 = "apple";
// var fruit2 = "orange";
// var fruit3 = "mango";

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);

// ////
// //by using array we can write above situation in a single line
// // in array memory is used index wise
// //index always start with zero 
// // [] => empty array

// var fruit = ["apple","orange","mango"];
// console.log(fruit);

// /////

// var countryArray = [];
// countryArray[0] = "Pakistan";
// countryArray[1] = "India";
// countryArray[2] = "China";
// countryArray[4] = "USA";
// console.log(countryArray);

// /////////Types of Array
//  //pop,push
//  //shift,unshift
//  //slice,splice

// var citiesArr = ['Karachi', 'Lahore' , 'Peshawar'];
// // citiesArr.unshift("Islamabad");//unshift will add Islamabad at begin
// // citiesArr.push("Islamabad");//push will add Islamabad at end
// // citiesArr.pop(); // pop will remove the last value
// // citiesArr.shift("Karachi"); //shift will remove the first value
// // citiesArr.slice(1,3);  //slice will help to copy array. slice will be starting and index
//                           // and ending in length
// // citiesArr.splice(0,1,"Islamabad"); // SYNTAX OF SPLICE : splice(starting, delete_count, "add value")                          
// console.log(citiesArr);



// /////
// //document.write => it's a function to print your output on ui/ux of browser which user can see
// var fullName = "Owais Rafiq";
// document.write("<h1>" + fullName + "</h1>"); // it will make heading of my name
// var age = "18";
// document.write("<p>" + "Age: " + " " + age + "</p>"); //it will para of my age 

// ////
// // var citiesArr = ['Karachi', 'Lahore' , 'Peshawar'];
// // console.log(cities[0]); /// these all three console will print 3 values of array seperately
// // console.log(cities[1]);
// // console.log(cities[2]);


// // ///
// // FOR LOOP => loop means repitition/cycle. 
// /// syntax of for loop will be for(initialization ; condition ; increment or decreament){}


// for (var i = 1 ; i < 10 ; i++){
//     console.log("Hello World");
// }

// //// 
// /// below loop is use to print the list of 10 number using for loop
// for (var i = 1 ; i <=10 ; i++){
//     document.write("<p>" + i + "</h1>" + "</br>"); 
// }

// ////
// var citiesArr = ['Karachi', 'Lahore' , 'Peshawar', 'Islamabad', 'Multan'];
// console.log(citiesArr.length); // .length property is use to count elements in array just like in above it's 3.
// for(var i = 0 ; i < citiesArr.length ; i++){
//     console.log(citiesArr[i]); //This loop will print each city name seperately on console.
// }
// /////
// for(var i = 1 ; i<=10 ; i++){
//     document.write("2 x" + " " + i + " " + "=" + " " + 2 * i + "</br>");
// }

// ////
// var isMatch = false;

// for(var i = 0; i < citiesArr.length; i++){
//     if(citiesArr[i] === "Karachi"){
//         isMatch = true;
//         document.write(isMatch);
//         break;
//     }
//     else{
//         isMatch = false;
//         document.write(isMatch);
//     }
//     }

/////
//nested loop 
// for(var i = 1; i < 6; i++){
//     console.log("i",i);
//     for(var j = 1; j < 6; j++){
//         console.log("j",j);
//     }
// }

// ////
// //array can store different type of array in one array
// var arr = ["karachi","lahore",true,undefined,null,22324];

// ///
// //2d array example
// var arr = [["Karachi", "Pakistan"], ["Delhi","India"],["lahore","Karachi"]]
// console.log(arr[0][1]); //it will call pakistan from 1st array of index 0
// console.log(arr[2][0]);//it will call lahore from 3rd array of index 2

// for(var row = 0 ; row < arr.length ; row++){
//     console.log(arr[row]); //["karachi", "pakistan"]

//     for(var col = 0 ; col < arr[row].length ; col++){
//         console.log(arr[row][col]);
//     }
// }

// ///
// //for changing case you can choose toLowerCase() converts a string to lowercase, and String. toUpperCase() converts a string to uppercase.
// var a = "KARACHI";
// b = a.toLowerCase();
// console.log(b); //it will give output karachi all in lowercase

// ////
// var c = "karachi";
// d = c.toUpperCase();
// console.log(d); //it will give output KARACHI all in uppercase

// ////
// var username = "owais";
// var firstLetter = username[0].toUpperCase();
// var otherLetter = username.slice(1);

// console.log(firstLetter,"firstLetter"); // output will be O
// console.log(otherLetter,"otherLetter"); // output will be wais
// console.log(firstLetter + otherLetter); // output will be Owais

// /// 
// var username = "owais rafiq";
// var strSplit = username.split(" "); //split convert string into array
// console.log(strSplit); //output will be ['owais' , 'rafiq']
// var tempArr1 = strSplit[0].toUpperCase(); //output will be OWAIS
// var tempArr2 = strSplit[1].toUpperCase(); //output will be RAFIQ
// var tempfin = console.log(tempArr1 + " " + tempArr2); //output will be OWAIS RAFIQ

///
//to know the index number of any word in a sentence
var str = "Create and customize your web3 profile, check out other profiles, and explore popular NFT collections and tokens."

var indexNumber = str.indexOf("profile"); //indexOf check from starting
console.log("index Number",indexNumber);
var indexNumber = str.lastIndexOf("profile"); //lastIndexOf check from ending
console.log("index Number",indexNumber);

////
var userName = "Owais";
const indexNum = userName.indexOf("i");
console.log("Index Num",indexNum);
console.log("userName r",userName[indexNum]);

////
///it will check that eiter word karachi is present or not
var city = "lahore,islamabad karachi";
var indexNumber = city.indexOf("karachi");
console.log("Index Number",indexNumber);
if(indexNumber == -1){
    console.log("Karachi not exist");
}
else{
    console.log("Karachi exist");
}

////
var str = "Create and customize your web3 profile, check out other profiles, and explore popular NFT collections and tokens."
// var replace = str.replace(/profiles/g prof);
console.log(str);

////

var num1 = 88.22421;
var floor = Math.floor(num1);
console.log(floor); // output will be 88

var num2 = 40.241414;
var ceil = Math.ceil(num2);
console.log(ceil); //ceil will add one in given input and ans will be 41

var num3 = 82.71241;
var roundOff = Math.round(num3);
console.log(roundOff); // the round will round off the given output and ans will be 83

/////

var randomNo = Math.random();
console.log(randomNo); // it will generate random number with decimal

///
//if you want to generate random number without any decimal places so we can use random with round function.

var randomNo = Math.round(Math.random());
console.log(randomNo);

/// 
var randomNo = Math.round(Math.random() * 6 + 1); //RANGE FROM 1 TO 6
console.log(randomNo);
var randomNo = Math.round(Math.random() * 50 + 1); //RANGE FROM 1 TO 50
console.log(randomNo);

////
var num1 = 100;
var num2 = 200;
var num3 = "300";
console.log(typeof num1); //number
console.log(typeof num2); //number
console.log(typeof num3); //string

//
var num = "200";
var num2 = "300";
var sum = +num + +num2; //that + sign before the name of the var string will be converted into number
console.log(num + " " + "+" + " " + num2 + " " + "=" + " " + sum); // output will be 200 + 300 = 500

var num = Number("99.9");
console.log(typeof num); //Through Number function we can convert string into number

///
var num = parseInt("99.9");
console.log(typeof num);
console.log(num); // output will be 99 bcz of the parseInt function which convert it to integer and ignore the whole decimals places

///
