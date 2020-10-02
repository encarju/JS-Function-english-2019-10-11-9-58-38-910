function palindrome(message){
    let msgArray = message.split("");
    let msgLength = msgArray.length;
    let half = Math.floor(msgLength/2);

    for(var x = 0;x<half;x++){
        if(msgArray[x] != msgArray[msgLength-1-x]){
            return false;
        }
    }

    return true;
}

console.log(palindrome('hello'));
console.log(palindrome('abcba'));