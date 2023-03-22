console.log("hello");

let anzahl = 0;

document.getElementById("clickMe").addEventListener("click", () => {
    anzahl += 1
    document.getElementById("clickMe").innerHTML = "Click me: "+anzahl;
    console.log(anzahl);
})