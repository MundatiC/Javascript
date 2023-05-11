const currentDate = new Date();


const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const dayFirstHyphen = `${month}-${day}-${year} day first hyphen format`;
const dayFirstSlash = `${month}/${day}/${year} day first slash format`;
const monthFirstHyphen  = `${day}-${month}-${year} month first hyphen format`;
const monthFirstSlash = `${day}/${month}/${year} month first slash format`;


console.log(dayFirstHyphen);
console.log(dayFirstSlash);
console.log(monthFirstHyphen);
console.log(monthFirstSlash);
