function calculator(numerator,denominator){
    var answer = numerator/denominator;
    var s = String(answer);
    var r = Array.from(s);
    var output = "";
    output += r[2]+r[3];
    if(r[4] === undefined){
        return output + "%";
    }
    output += ".";
    output += r[4]+r[5];
    var final = output + "%";
    return final;
}
console.log(calculator(122,140));
console.log(calculator(38,100));
