let c = 32;
let s1 = "hello world";
let s2 = "bye world";
let t = true;
let f = false;

let someString = "hello";

switch (someString) {
    case "hello":
        console.log("world");
        break;
    case "ololo":
        console.log("ololo");
        break;
    case "test":
        console.log("test 123");
        break;
    default:
        console.log("default");
}

switch (c) {
    case c < 32:
        console.log("Approved");
        break;
    default:
        console.log("Declined");
        break;
}

switch (s1) {
    case "hello world":
        console.log("Hi");
        break;
    case  "bye world":
        console.log("Buy");
        break;
    default:
        console.log("Empty");
        break;
}

switch (s1) {
    case  "olo world":
        console.log("Hi");
        break;
    case  "bye world":
        console.log("Buy");
        break;
    default:
        console.log("Empty");
        break;
}

switch (s1) {
    case  "olo world":
        console.log("Hi");
        break;
    case  "olo-lo world":
        console.log("Buy");
        break;
    default:
        console.log("Empty");
        break;
}
