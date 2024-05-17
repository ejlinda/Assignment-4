function findAddress(address){
     let sum = '';
     for(var i=0;i<3;i++){

        var property = Object.values(address);
        if(property[i]== '')property[i]='__';
        sum = sum + property[i]  ;
        if(i>-1 && i<2)sum = sum + ', ';
     }
     return sum;
}
var address = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
var result = findAddress(address);
console.log(result)