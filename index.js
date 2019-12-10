// data types
// primitives

// boolean
var variableName=false;
var variablename=true;

//number
var number = 1;

//float - nuber
var floatNum = 4.3;

// strimg
var word = 'a string of characters';

// zero indexed for the characters in the string
// stringVariable[ index ] => the character
word[0]

//console.log('word[0]:', word[0]);
//console.log('word.indexof('r"):', word.indexof('r')');

// arrays
var arr =[];
arr.push(4);
arr.push(5);
arr.push(6);

console.log('arr:', arr);

arr.pop();

console.log('arr:', arr);
console.log('arr.length:', arr.length);

// objects

var obj = {
    bool: true,
    num: 3,
    str: 'A string', 
    char: 'a', 
    arr: [],
    obj: {}
};

// accessing values from an abj

obj['bool']; // true]
obj['num']; // 3

obj.num; //3
// obj.('list-item-1');

// loop through arrays
// for loop
// for (initialize var; condition; increate var)

for(var i=0; i < arr.length; i++)
{
    console.log('arr[i]', arr[i]);
}


// loop through objects
for (var key in obj) {
    console.log('keys value: ', obj[key]);

}