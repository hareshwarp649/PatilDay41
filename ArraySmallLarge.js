
var randoms = [...Array(10)].map(() => Math.floor(Math.random() * 1000));
var sortnum=randoms.sort();
console.log(sortnum);

const minimumIndex = randoms => {
   return randoms.indexOf(Math.min(...randoms));
};
const maximumIndex = randoms => {
    return randoms.indexOf(Math.max(...randoms));
 };
const secondMinimum = randoms => {
    const copy = randoms.slice();
    copy.splice(minimumIndex(copy), 1);
    return copy[minimumIndex(copy)];
 };
 console.log("Second Smallets Number:- "+secondMinimum(randoms));
 const secondMax = randoms => {
    const copy = randoms.slice();
    copy.splice(maximumIndex(copy), 1);
    return copy[maximumIndex(copy)];
 };
 console.log("Second Largest Number:- "+secondMax(randoms));