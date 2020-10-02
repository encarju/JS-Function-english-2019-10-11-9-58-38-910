function countWords(message){
    let messageArray = message.split("");
    let count = 0;
    for(var x = 0;x<messageArray.length;x++){
        if(x==0 && x!=" "){
            count++;
        }
        else if(x!=0){
            if(messageArray[x-1]==" ")
            count++;
        }
    }
    return count;
}

console.log(countWords(' afs asf asfas asf '))