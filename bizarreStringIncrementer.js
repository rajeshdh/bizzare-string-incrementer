// Start your implementation here
const bizarreStringIncrementer = (str) => {
    if(!str || typeof(str) !== 'string') return 'Please provide a valid string';

    // find digits in the end of the string
    let numberMatches = str.match(/\d+$/);
    if (!numberMatches) {
        return str + '1';
    }
    let endNumStr = numberMatches[0];
    let endNum = parseInt(endNumStr, 10);

    if (endNumStr != endNum.toString()) {
        // need padding 
        let zerosCount = endNumStr.length ;
        endNum++;
        let newStr = endNum.toString();
        newStr = newStr.padStart(zerosCount, "0");
        str = str.replace(endNumStr, newStr);

        return str;
    } else {
        endNum++;
        str = str.replace(endNumStr, endNum);
        return str;

    }

}

module.exports = bizarreStringIncrementer;