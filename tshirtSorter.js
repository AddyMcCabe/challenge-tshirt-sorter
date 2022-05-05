// Write your solution below:
function sorter(str) {
    let strArr = str.split('');
    let smallArr = [];
    let mediumArr = [];
    let largeArr = [];

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === 's') {
            smallArr.push('s')
         } else if(strArr[i] === 'm') {
             mediumArr.push('m')
         } else if(strArr[i] === 'l') {
             largeArr.push('l')
         }

         
    }
    let sortedStr = smallArr.join('') + mediumArr.join('') + largeArr.join('');
    return sortedStr;
}

console.log(sorter('lmslmssll'))
