let c = 32;
let s1 = "hello world";
let s2 = "bye world";
let t = true;
let f = false;


if (c < 32) {
    console.log("Approved");
} else {
    console.log("Declined");
}

if (s1 === "hello world")
    console.log("hi");


if (t !== 32) {
    console.log(true);
} else {
    console.log(false);
}

if (s1 === "hello world") {
    console.log("Hi");
} else if (s2 === "bye world") {
    console.log("Buy");
} else {
    console.log("Empty");
}

if (s1 === "olo world") {
    console.log("Hi");
} else if (s2 === "bye world") {
    console.log("Buy");
} else {
    console.log("Empty");
}

if (s1 === "olo world") {
    console.log("Hi");
} else if (s2 === "olo-lo world") {
    console.log("Buy");
} else {
    console.log("Empty");
}

if (s1 === "hello world" && s2 === "bye world") {
    console.log("Uhhhhuuuu");
}

if (s1 === "hello world" && s2 !== "bye world") {
    console.log("UPPPPSSSS");
} else {
    console.log("Smth went wrong");
}

if (s1 === "bye world" || s2 === "bye world") {
    console.log("Forbidden");
}
