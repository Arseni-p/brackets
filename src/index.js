module.exports = function check(str, bracketsConfig) {

    let strArr = str.split("");

        for (let i = 0; i < strArr.length; i++) {

            for (let j = 0; j < bracketsConfig.length; j++) {
                let configItem = bracketsConfig[j];
                
                if (strArr[i] === bracketsConfig[j][0] && strArr[i+1] === bracketsConfig[j][1]) {
                    strArr.splice(i, 2);
                    i = -1;
                } 
            }
        }
        return strArr.length === 0;
}
