

function validate(value){
    if(typeof(value) != 'boolean'){
        console.log(`${value} is not boolean`);
    }
    else{
        console.log(`${value} is boolean`);
    }
}

let male = true;
let me = 13;

validate(male);
validate(me);