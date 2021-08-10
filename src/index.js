    module.exports = function toReadable(number) {
        let  hnd = "hundred";
      
      let toTen = new Map([
        ['0', ''],
        ['1', 'one'],
        ['2', 'two'],
        ['3', 'three'],
        ['4', 'four'],
        ['5', 'five'],
        ['6', 'six'],
        ['7', 'seven'],
        ['8', 'eight'],
        ['9', 'nine']
      ]
      );
      
      let toHundred = new Map([
        ['00', ''],
        ['10', 'ten'],
        ['11', 'eleven'],
        ['12', 'twelve'],
        ['13', 'thirteen'],
        ['14', 'fourteen'],
        ['15', 'fifteen'],
        ['16', 'sixteen'],
        ['17', 'seventeen'],
        ['18', 'eighteen'],
        ['19', 'nineteen'],
        ['20', 'twenty'],
        ['30', 'thirty'],
        ['40', 'forty'],
        ['50', 'fifty'],
        ['60', 'sixty'],
        ['70', 'seventy'],
        ['80', 'eighty'],
        ['90', 'ninety']
      ]
      );
      
      function numToTen(ch) {
         return toTen.get(ch);
      };
      
      function numToHundred(ch) {
        return toHundred.get(ch);
      };
      
      function numDb(ch1, ch2) {
        let strtemp = '';
        let ch12 = ch1 + ch2;
        if (ch1 !== '0') {//ab  
            if (toHundred.has(ch12)) {  //12  20
              strtemp = numToHundred(ch12);
            }
            else {     // ab
              ch1 += '0'; //a0
              strtemp = numToHundred(ch1); 
              strtemp += " " + numToTen(ch2);
          }
        }
          else {   //0b
            strtemp = numToTen(ch2)
          }
        return strtemp;
      };
      
      
      function numToThree (num) {
        let numtemp = '';
        let lenNum = num.length;
        switch (lenNum) {
          case 3: numtemp = num; break; //abc
          case 2: numtemp = '0' + num; break; //0bc
          case 1: numtemp = '00' + num; break; //00c
        }
         return numtemp;
      }
      
      function numThree(num) {
        let num3 = numToThree(num); //abc
        let str = '';
        if (num3[0] !== '0') {   //abc
          str = numToTen(num3[0]) + " " + hnd;   //a hundred
          str += ' ' + numDb(num3[1], num3[2]);  // + bc
             }
          else { // bc
            str += ' ' + numDb(num3[1], num3[2]);
          }
         return str.trim();
      };
      
    //main
          
        if (number >= 1000 || number < 0 ) {
            return "Wrong number";
        } else if (number === 0) {
            return "zero";
        } else {
            return numThree(number.toString());
        }
    };
