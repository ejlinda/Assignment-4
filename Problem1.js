
    function cubeNumber(num) {
        if(num>='-9' && num<='9'){
        var cube = num *num *num;
         return cube;
        }
        else{
            var message = 'Not a number';
            return message;
        }
     }
    var number = 3;
    var result = cubeNumber(number);
    console.log(result);




