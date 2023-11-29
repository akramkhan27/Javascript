const CustomerId=1234;
let CustomerGmail="akramkhangmail.com";
var CustomerPass="Akramkhan";
/*
    prefer not to use 'var' because of issue in  block scope and function scope
*/
CustomerAddress="Nagpur"; // Not recommended to declare the variable but we can also declare like this 
let CustomerCity;

// CustomerId=4321; // Not Allowed to change constant variable

console.log(S=CustomerId);

CustomerGmail="khanakramgmail.com";
CustomerPass="KhanAkram";
CustomerAddress="Mumbai";

console.table([CustomerId,CustomerGmail,CustomerPass,CustomerAddress,CustomerCity]);