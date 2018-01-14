function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(n) {
    let ret = n;
    let bi;
    
    if( n > 0 && n < 1000000) {
        while(ret >= n){
            bi = '';
            for(let i=0; i<n.toString(2).length; i++){
                if(flip()){
                    bi = bi + '1';
                }else{
                    bi = bi + '0';
                }
            }
            ret = parseInt(bi, 2);
        }
    } else {
        return "error";
    }
    
    return ret;
}

console.log(randomNumber(500));
console.log(randomNumber(1));
console.log(randomNumber(500));
console.log(randomNumber(999999));
console.log(randomNumber(1000000));


