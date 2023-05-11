function Type_of(v){
    let typeOf = typeof(v);
    console.log(`${v} is of type ${typeOf}`);
    return typeOf;
}

let name = "Caleb";
let num = 5;
let bol = false;

let input = prompt("Enter value");

Type_of(name);
Type_of(num);
Type_of(bol);
Type_of(input);
