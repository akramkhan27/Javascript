let myName="Akram";
let repocount=10;
// console.log(myName+repocount+" Hello");

console.log(`Hello, My name is ${myName} and my repocount is ${repocount}`);

const name=new String("Akram khan");
console.log(name[0]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.toLocaleUpperCase());
console.log(name.toLocaleLowerCase());
console.log(name.indexOf('a'));
console.log(name.lastIndexOf('a'));
console.log(name.charAt(6));

const newString=name.substring(0,4);
console.log(newString);

const anotherString=name.slice(-4,7);  //-tive value can be given in slice if we put it on substring then always start from 0 
console.log(anotherString);

const value="    akram    ";
console.log(value);
console.log(value.trim());

url="hhtps://akram.com/akram%20khan";
console.log(url.replace("%20","-"));
console.log(url.replace("a","-"));
console.log(url.replaceAll("a","-"));
console.log(url.includes("marka"));
console.log(url.includes("akram"));

const unknownString="akram-khan-marka";
const knownString="Akram Mustaq Khan";
console.log(unknownString.split("-",2));
console.log(knownString.split(" ",1));
console.log(knownString.split(" "));
console.log(unknownString);

console.log(unknownString.concat(knownString));
console.log(unknownString.endsWith("rka"));
console.log(unknownString.endsWith("rk"));
console.log(unknownString.startsWith("akram"));
console.log(unknownString.startsWith("kram"));
