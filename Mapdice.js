let counter1 =0,counter2 =0,counter3 =0,counter4 =0,counter5 =0,counter6 = 0;
function RollDie(){
    return dieNumber = Math.floor(Math.random() *6 ) + 1;
}
let dieRollMap = new Map();
while(counter1 < 10 && counter2 < 10 && counter3 < 10 && counter4 <10 && counter5 <10 && counter6 <10 ){
    let result = RollDie();
    switch(result){
        case 1:
            counter1++;
            dieRollMap.set(1,counter1);
            break;
        case 2:
            counter2++;
            dieRollMap.set(2,counter2);
            break;
        case 3:
            counter3++;
            dieRollMap.set(3,counter3);
            break;
        case 4:
            counter4++;
            dieRollMap.set(4,counter4);
            break;
        case 5:
            counter5++;
            dieRollMap.set(5,counter5);
            break;
        case 6:
            counter6++;
            dieRollMap.set(6,counter6);
            break;
    }
}
console.log(dieRollMap);
let minTimes = Math.min(...dieRollMap.values());
let maxTimes = Math.max(...dieRollMap.values());
function getKey(value) {
    return [...dieRollMap].find(([key, val]) => val == value)[0]
  }
console.log("Max times die Number is "+getKey(maxTimes));
console.log("Min times die Number is "+getKey(minTimes));