//custom implementation of String.search() or String.includes() methods
String.prototype.customSearch = function(subString){
    for(let i = 0; i < this.length; i++){
        let found = true;
        for(let j = 0; j < subString.length; j++){
            if(this[i+j] !== subString[j]){
                found = false;
                break;
            }
        }
        if(found){
            return i;
        }
    }
    return -1;
}

console.log(String.fromCharCode(97-32))

//custom upper case convertion string method
String.prototype.convertToUpperCase = function(){
    let upper = "";
    for(let i = 0; i < this.length; i++){
        let charCode = this[i].charCodeAt()
        console.log(charCode)
        if(charCode >= 97 && charCode <= 122){
          upper += String.fromCharCode(charCode - 32)
        }else{
            upper += String.fromCharCode(charCode)
        }
    }
    return upper;
}


