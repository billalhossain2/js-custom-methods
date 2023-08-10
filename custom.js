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



