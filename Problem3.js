function sortMaker(arr){
   
  {
    if(arr[0] == arr[1]){
        var result = 'equal';
       }
      else if(arr[0] <0 || arr[1]<0){
           var result = 'Invalid Input';
       }
       else{
       var result = arr.sort(function(a,b){return b-a;});
       }   
    
  }
    return result;
}
var arr = [7,15];
var final = sortMaker(arr);
console.log(final);