
function matchFinder(string1,string2){

    if(typeof string1 === 'string'&& typeof string2 === 'string' ){
   var match = string1.includes(string2);
   return match;
    }
    else{
        var message = 'Not a string';
    }
}
var result = matchFinder('John doe','ohn');
console.log(result);