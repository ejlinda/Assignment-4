function canPay(changeArray,totalDue){
    if(changeArray.length == 0){
        var message = 'This array is empty.';
        return message;
    }
    else {
        var total = changeArray[0]+changeArray[1]+changeArray[2];
        if( total >= totalDue){
           return true;
        }
        else {
           return false;
        }
    }

}
var changeArray = [1, 5, 5 ];
var totalDue = 10;
var result = canPay(changeArray,totalDue);
console.log(result);
